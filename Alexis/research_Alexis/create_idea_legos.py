import csv
import re

def classify_hook_type(text):
    """Classify hook into Kallaway's 6 archetypes"""
    text_lower = text.lower()[:300]
    
    # CONTRARIAN - challenges conventional wisdom
    contrarian_patterns = [
        r"everyone says|everyone thinks|most people|common belief|wrong|myth|stop|don't|isn't|aren't|won't|shouldn't",
        r"unpopular opinion|hot take|controversial|overrated|underrated",
        r"the problem is|the real issue|actually|but in reality|truth is"
    ]
    
    # FORTUNE TELLER - predicting future/trends
    fortune_patterns = [
        r"will change|going to|future|in \d+ years|by 202\d|next decade|era|evolution|shift",
        r"about to|coming soon|the rise of|trend|becoming|emerging"
    ]
    
    # EXPERIMENTER - tested/tried something
    experiment_patterns = [
        r"i tested|i tried|we tested|we tried|i spent|after \d+|experiment|results",
        r"here's what happened|what i learned|what we found|turns out"
    ]
    
    # TEACHER - sharing lessons/frameworks
    teacher_patterns = [
        r"\d+ things|here's how|step by step|framework|guide|tips|lessons|how to|ways to",
        r"the \d+ levels|must read|must know|checklist|template|playbook"
    ]
    
    # MAGICIAN - pattern interrupt/shocking stat
    magician_patterns = [
        r"^\$?\d+[km%]|^no\.|^yes\.|^stop\.|one word:|single|shocking|incredible|unbelievable"
    ]
    
    # INVESTIGATOR - revealing secrets/discoveries
    investigator_patterns = [
        r"nobody|no one talks|secret|hidden|discovered|revealed|behind the scenes|inside look",
        r"what .* won't tell|the real reason|truth about"
    ]
    
    # Score each type
    scores = {
        'Contrarian': 0,
        'Fortune Teller': 0,
        'Experimenter': 0,
        'Teacher': 0,
        'Magician': 0,
        'Investigator': 0
    }
    
    for pattern in contrarian_patterns:
        if re.search(pattern, text_lower):
            scores['Contrarian'] += 1
    
    for pattern in fortune_patterns:
        if re.search(pattern, text_lower):
            scores['Fortune Teller'] += 1
    
    for pattern in experiment_patterns:
        if re.search(pattern, text_lower):
            scores['Experimenter'] += 1
    
    for pattern in teacher_patterns:
        if re.search(pattern, text_lower):
            scores['Teacher'] += 1
    
    for pattern in magician_patterns:
        if re.search(pattern, text_lower):
            scores['Magician'] += 1
    
    for pattern in investigator_patterns:
        if re.search(pattern, text_lower):
            scores['Investigator'] += 1
    
    # Get highest score
    max_score = max(scores.values())
    if max_score == 0:
        return 'Teacher'  # Default
    
    for hook_type, score in scores.items():
        if score == max_score:
            return hook_type
    
    return 'Teacher'

def extract_topic(text):
    """Extract main topic from post"""
    text_lower = text.lower()[:500]
    
    topics = {
        'Engineering Career': ['promoted', 'career', 'job', 'interview', 'salary', 'hired', 'hiring'],
        'Engineering Leadership': ['manager', 'lead', 'leadership', 'team', 'management', 'mentor'],
        'AI/ML/Coding Tools': ['ai', 'chatgpt', 'claude', 'copilot', 'vibe coding', 'llm', 'machine learning'],
        'System Design': ['architecture', 'system design', 'scalab', 'microservice', 'api', 'database'],
        'Software Engineering': ['code', 'coding', 'engineer', 'development', 'software', 'programming'],
        'Tech Industry': ['tech', 'startup', 'company', 'industry', 'market', 'layoff'],
        'Productivity': ['productivity', 'time', 'efficient', 'workflow', 'process'],
        'Technical Skills': ['.net', 'javascript', 'python', 'react', 'node', 'aws', 'cloud'],
        'Communication': ['writing', 'communication', 'email', 'meeting', 'presentation'],
        'Personal Growth': ['growth', 'learn', 'skill', 'improve', 'mindset']
    }
    
    for topic, keywords in topics.items():
        for keyword in keywords:
            if keyword in text_lower:
                return topic
    
    return 'Software Engineering'

def analyze_structure(text):
    """Analyze story structure"""
    has_list = bool(re.search(r'^\s*[-•\d]+\.?\s', text, re.MULTILINE))
    has_question = '?' in text
    line_count = len([l for l in text.split('\n') if l.strip()])
    word_count = len(text.split())
    
    if has_list and line_count > 5:
        return 'List Post'
    elif has_question and word_count < 100:
        return 'Question/Engagement'
    elif word_count < 50:
        return 'Short Punch'
    elif 'story' in text.lower() or re.search(r'when i|years ago|one day', text.lower()):
        return 'Story'
    elif has_list:
        return 'List + Context'
    else:
        return 'Observation/Opinion'

def extract_angle(text, hook_type):
    """Extract the unique angle/premise"""
    first_lines = ' '.join(text.split('\n')[:3])[:200]
    
    # Look for contrast patterns
    if 'but' in first_lines.lower():
        return 'Contrast/But'
    elif re.search(r'\d+%|\$\d+|\d+ years', first_lines):
        return 'Data/Numbers'
    elif 'i ' in first_lines.lower()[:50]:
        return 'Personal Experience'
    elif hook_type == 'Contrarian':
        return 'Against Common Wisdom'
    elif hook_type == 'Teacher':
        return 'Framework/How-To'
    else:
        return 'Industry Observation'

# Read outliers
input_file = "/Users/TERABYTE10/Downloads/Stacksync/04_linkedin_content/Stacksync Universe/Alexis/outliers_raw.csv"
output_file = "/Users/TERABYTE10/Downloads/Stacksync/04_linkedin_content/Stacksync Universe/Alexis/idea_legos_analysis.csv"

with open(input_file, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f)
    rows = list(reader)

print(f"Analyzing {len(rows)} outlier posts...")

# Analyze each post
analyzed = []
for row in rows:
    text = row.get('text', '')
    hook = row.get('hook', '')
    
    hook_type = classify_hook_type(text)
    topic = extract_topic(text)
    structure = analyze_structure(text)
    angle = extract_angle(text, hook_type)
    
    # Extract first line as hook headline
    first_line = text.split('\n')[0].strip() if text else ''
    
    analyzed.append({
        'rank': row['rank'],
        'author': row['author'],
        'outlier_score': row['outlier_score'],
        'likes': row['likes'],
        'comments': row['comments'],
        'total_engagement': row['total_engagement'],
        'hook_type': hook_type,
        'topic': topic,
        'angle': angle,
        'structure': structure,
        'first_line': first_line[:100],
        'hook_150': hook[:150],
        'full_text': text,
        'url': row['url']
    })

# Write analysis CSV
with open(output_file, 'w', newline='', encoding='utf-8') as f:
    fieldnames = ['rank', 'author', 'outlier_score', 'likes', 'comments', 'total_engagement', 
                  'hook_type', 'topic', 'angle', 'structure', 'first_line', 'hook_150', 'full_text', 'url']
    writer = csv.DictWriter(f, fieldnames=fieldnames)
    writer.writeheader()
    writer.writerows(analyzed)

print(f"\nSaved to: {output_file}")

# Print summary stats
print("\n" + "="*60)
print("IDEA LEGOS SUMMARY")
print("="*60)

# Hook type distribution
hook_types = {}
for a in analyzed:
    ht = a['hook_type']
    hook_types[ht] = hook_types.get(ht, 0) + 1

print("\nHOOK TYPE DISTRIBUTION:")
for ht, count in sorted(hook_types.items(), key=lambda x: -x[1]):
    print(f"  {ht}: {count} ({count/len(analyzed)*100:.0f}%)")

# Topic distribution
topics = {}
for a in analyzed:
    t = a['topic']
    topics[t] = topics.get(t, 0) + 1

print("\nTOPIC DISTRIBUTION:")
for t, count in sorted(topics.items(), key=lambda x: -x[1]):
    print(f"  {t}: {count} ({count/len(analyzed)*100:.0f}%)")

# Structure distribution
structures = {}
for a in analyzed:
    s = a['structure']
    structures[s] = structures.get(s, 0) + 1

print("\nSTRUCTURE DISTRIBUTION:")
for s, count in sorted(structures.items(), key=lambda x: -x[1]):
    print(f"  {s}: {count} ({count/len(analyzed)*100:.0f}%)")

# Top performing hook types (avg engagement)
print("\nAVG ENGAGEMENT BY HOOK TYPE:")
hook_engagement = {}
hook_counts = {}
for a in analyzed:
    ht = a['hook_type']
    eng = int(a['total_engagement'])
    hook_engagement[ht] = hook_engagement.get(ht, 0) + eng
    hook_counts[ht] = hook_counts.get(ht, 0) + 1

for ht in hook_engagement:
    avg = hook_engagement[ht] / hook_counts[ht]
    print(f"  {ht}: {avg:.0f} avg engagement")

# Top 10 patterns to replicate
print("\n" + "="*60)
print("TOP 10 IDEA LEGOS TO REPLICATE FOR ALEXIS")
print("="*60)

for i, a in enumerate(analyzed[:10]):
    print(f"\n#{i+1} [{a['outlier_score']}x] {a['author']}")
    print(f"   Hook Type: {a['hook_type']} | Topic: {a['topic']} | Structure: {a['structure']}")
    print(f"   Angle: {a['angle']}")
    print(f"   First Line: {a['first_line'][:80]}...")

