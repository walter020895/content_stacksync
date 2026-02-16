import csv
from collections import defaultdict
import json

# Read CSV and find column indices
print("Loading CSV...")
input_file = "/Users/TERABYTE10/Downloads/Stacksync/04_linkedin_content/Stacksync Universe/Alexis/dataset_linkedin-post_2026-01-19_21-21-52-420.csv"

with open(input_file, 'r', encoding='utf-8-sig') as f:
    reader = csv.reader(f)
    headers = next(reader)
    
    # Find column indices
    col_map = {h: i for i, h in enumerate(headers)}
    
    author_col = col_map.get('authorName')
    followers_col = col_map.get('authorFollowersCount')
    likes_col = col_map.get('numLikes')
    comments_col = col_map.get('numComments')
    shares_col = col_map.get('numShares')
    text_col = col_map.get('text')
    url_col = col_map.get('url')
    date_col = col_map.get('postedAtISO')
    
    print(f"Columns found - author:{author_col}, likes:{likes_col}, text:{text_col}")
    
    # Store all posts
    posts = []
    author_posts = defaultdict(list)
    
    for row_num, row in enumerate(reader):
        if row_num % 5000 == 0:
            print(f"Processing row {row_num}...")
        
        try:
            author = row[author_col] if author_col and author_col < len(row) else ""
            followers = row[followers_col] if followers_col and followers_col < len(row) else "0"
            likes = row[likes_col] if likes_col and likes_col < len(row) else "0"
            comments = row[comments_col] if comments_col and comments_col < len(row) else "0"
            shares = row[shares_col] if shares_col and shares_col < len(row) else "0"
            text = row[text_col] if text_col and text_col < len(row) else ""
            url = row[url_col] if url_col and url_col < len(row) else ""
            date = row[date_col] if date_col and date_col < len(row) else ""
            
            # Skip empty posts
            if not text or not author:
                continue
            
            # Convert to numbers
            try:
                likes_num = int(float(likes)) if likes else 0
                comments_num = int(float(comments)) if comments else 0
                shares_num = int(float(shares)) if shares else 0
                followers_num = int(float(followers)) if followers else 0
            except:
                likes_num = 0
                comments_num = 0
                shares_num = 0
                followers_num = 0
            
            post = {
                'author': author,
                'followers': followers_num,
                'likes': likes_num,
                'comments': comments_num,
                'shares': shares_num,
                'total_engagement': likes_num + comments_num + shares_num,
                'text': text,
                'hook': text[:150],
                'url': url,
                'date': date
            }
            
            posts.append(post)
            author_posts[author].append(likes_num)
            
        except Exception as e:
            continue

print(f"\nTotal posts loaded: {len(posts)}")
print(f"Unique authors: {len(author_posts)}")

# Calculate author averages
author_avg = {}
for author, likes_list in author_posts.items():
    author_avg[author] = sum(likes_list) / len(likes_list) if likes_list else 1
    print(f"  {author}: {len(likes_list)} posts, avg {author_avg[author]:.0f} likes")

# Calculate outlier scores
for post in posts:
    avg = author_avg.get(post['author'], 1)
    post['author_avg'] = avg
    post['outlier_score'] = post['likes'] / avg if avg > 0 else 0

# Sort by outlier score
posts_sorted = sorted(posts, key=lambda x: x['outlier_score'], reverse=True)

# Print top 30 outliers
print("\n" + "="*80)
print("TOP 30 OUTLIERS (by outlier score)")
print("="*80)

for i, post in enumerate(posts_sorted[:30]):
    print(f"\n#{i+1} [{post['outlier_score']:.2f}x] {post['author']} | {post['likes']} likes (avg: {post['author_avg']:.0f})")
    print(f"Hook: {post['hook'][:120]}...")

# Save to CSV
output_file = "/Users/TERABYTE10/Downloads/Stacksync/04_linkedin_content/Stacksync Universe/Alexis/outliers_raw.csv"
with open(output_file, 'w', newline='', encoding='utf-8') as f:
    writer = csv.writer(f)
    writer.writerow(['rank', 'author', 'followers', 'likes', 'comments', 'shares', 'total_engagement', 'author_avg', 'outlier_score', 'hook', 'text', 'url', 'date'])
    
    for i, post in enumerate(posts_sorted[:300]):
        writer.writerow([
            i+1,
            post['author'],
            post['followers'],
            post['likes'],
            post['comments'],
            post['shares'],
            post['total_engagement'],
            round(post['author_avg'], 1),
            round(post['outlier_score'], 2),
            post['hook'],
            post['text'],
            post['url'],
            post['date']
        ])

print(f"\n\nSaved top 300 outliers to: {output_file}")
