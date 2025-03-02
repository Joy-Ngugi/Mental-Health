document.addEventListener("DOMContentLoaded", () => {
   
    const homeButton = document.getElementById("homeButton");
    if (homeButton) {
        homeButton.addEventListener("click", () => {
            window.location.href = "index.html";
        });
    }

   
    const form = document.getElementById("assessment-form");
    const symptomInput = document.getElementById("symptom");
    const resultDiv = document.getElementById("assessment-result");

    if (!form || !symptomInput || !resultDiv) {
        console.error("One or more form elements not found.");
        return;
    }

    
    const symptomToPage = {
        
        "insomnia.html": [
            "difficulty falling asleep", "trouble sleeping", "can't sleep", "sleep onset issues",
            "waking up at night", "broken sleep", "frequent awakenings", "can't stay asleep",
            "waking up too early", "early morning awakening", "trouble going back to sleep",
            "feeling unrefreshed", "non-restorative sleep", "poor sleep quality", "tired after sleep",
            "daytime fatigue", "drowsiness", "low energy", "sleep deprivation", "chronic tiredness",
            "irritability", "mood swings", "anxiety", "depression", "stress-induced insomnia",
            "difficulty focusing", "poor concentration", "brain fog", "memory issues", "trouble making decisions",
            "increased errors", "accidents due to lack of sleep", "reduced alertness", "impaired cognitive function"
        ],
        "adhd.html": ["Difficulty sustaining attention in tasks or play activities", "Frequent careless mistakes in schoolwork or work-related duties", "Struggles to follow through on instructions and complete tasks", "Often loses important items (e.g., keys, school supplies)","Easily distracted by external stimuli", "Appearing forgetful in daily activities", "Inattention","Hyperactivity and Impulsivity","Fidgeting, tapping, or squirming in seat","Inability to remain seated in appropriate situations","Excessive talking and interrupting others", "Difficulty waiting for their turn in conversations or activities", "Acts without considering consequences","Engages in risky behaviors without assessing danger"],
        "anxiety.html": ["anxiety", "panic attacks", "phobias", "restlessness"],
        "depression.html": ["depression", "low mood", "hopelessness", "fatigue"],
        "asd.html": ["Difficulty with social interactions and relationships", "Delayed or atypical speech and language development", "Repetitive behaviors or restrictive interests", "Challenges in understanding social cues and nonverbal communication","Heightened or reduced sensitivity to sensory stimuli","Preference for routines and difficulty coping with change", "Intense focus on specific topics or activities","Unusual responses to sensory experiences","Difficulty making and maintaining eye contact"],
        "aspd.html": ["Lack of empathy, guilt, or remorse for harmful actions.", "Frequent disregard for laws and social norms.", "Manipulative or deceitful behavior for personal gain.", "Impulsive behavior and inability to plan ahead.","Difficulty maintaining long-term relationships or holding down a job"],
        "bdd.html": ["Excessive preoccupation with a perceived flaw in appearance", "Spending hours a day thinking about the perceived defect", "Engaging in repetitive behaviors (e.g., mirror checking, grooming, skin-picking)", "Seeking reassurance about appearance from others","Avoiding social situations due to embarrassment","Experiencing significant emotional distress and anxiety","Frequent comparison of appearance to others","Undergoing unnecessary cosmetic procedures without satisfaction"],
        "bipolar.html": ["Manic", "Increased energy and activity levels", "Euphoria or extreme irritability","Reduced need for sleep", "Racing thoughts and rapid speech","Impulsive or risky behavior","Persistent sadness or hopelessness","Loss of interest in activities","Changes in appetite and sleep patterns","Fatigue and low energy","Difficulty concentrating or making decisions","Thoughts of death or suicide","Hypomanic"],
        "bpd.html": [
            "fear of abandonment",
            "avoid being alone",
            "unstable relationships",
            "idealization and devaluation",
            "identity disturbances",
            "unstable self-image",
            "impulsive behaviors",
            "self-destructive behaviors",
            "reckless spending",
            "substance abuse",
            "binge eating",
            "suicidal behaviors",
            "self-harm",
            "emotional instability",
            "mood swings",
            "intense anger",
            "intense sadness",
            "chronic emptiness",
            "difficulty controlling anger",
            "paranoid thoughts",
            "severe dissociation",
            "stress-related paranoia"
        ],
        "depression.html": ["persistent sadness", "feelings of emptiness", "loss of interest", "appetite changes", "weight loss", "weight gain", "sleep disturbances", "insomnia", "oversleeping", "fatigue", "lack of energy", "feelings of worthlessness", "guilt", "helplessness", "difficulty concentrating", "trouble making decisions", "physical symptoms", "headaches", "digestive issues", "thoughts of death", "suicidal thoughts"],
        "dpdr.html": [
            "feeling detached", "detachment from body", "detachment from mind", 
            "thoughts not your own", "emotional numbness", "lack of connection to feelings", 
            "watching yourself from outside", "out of body experience",
            "world feels unreal", "dreamlike perception", "foggy perception", 
            "disconnected from surroundings", "disconnected from people", 
            "sensory distortions", "muted sounds", "blurry vision", 
            "time distortion", "time slowing down", "time speeding up"
        ],
        "eating.html": [
            "severe weight loss", "unintentional weight loss", "extreme weight loss",
            "constipation", "digestive issues", "irregular bowel movements",
            "lack of appetite", "loss of appetite", "decreased hunger",
            "abnormal menstrual periods", "missed periods", "irregular periods",
            "stomach cramps", "abdominal pain", "digestive pain",
            "low iron levels", "anemia", "low thyroid levels", "thyroid issues",
            "trouble concentrating", "difficulty focusing", "brain fog",
            "slow heart rate", "bradycardia", "low pulse"
        ],
        
        "gad.html": [
            "excessive worry", "uncontrollable worry", "chronic worry", "constant anxiety",
            "restlessness", "feeling on edge", "inability to relax", "uneasiness",
            "fatigue", "low energy", "tiredness", "exhaustion",
            "difficulty concentrating", "mind going blank", "brain fog", "lack of focus",
            "irritability", "easily annoyed", "short temper", "mood swings",
            "muscle tension", "muscle aches", "body stiffness", "tense muscles",
            "sleep disturbances", "insomnia", "difficulty falling asleep", "difficulty staying asleep",
            "headaches", "nausea", "dizziness", "gastrointestinal issues", "stomach pain", "digestive issues"
        ],
        "hoarding.html": [
            "difficulty discarding", "trouble letting go of items", "inability to discard", "fear of getting rid of things",
            "excessive accumulation", "cluttered living space", "hoarding objects", "too many belongings",
            "emotional distress when discarding", "anxiety over throwing things away", "fear of loss",
            "living space unusable", "blocked kitchen", "blocked bathroom", "too much clutter",
            "strong attachment to items", "sentimental attachment", "fear of needing items later",
            "social isolation", "relationship issues due to clutter", "conflict over hoarding",
            "health hazards", "fire hazard", "unsanitary conditions", "safety concerns"
        ],
        "mmd.html": [
            "persistent sadness", "depressed mood", "chronic sadness", "feeling down", "low mood",
            "loss of interest", "anhedonia", "no pleasure in activities", "disinterest in hobbies",
            "weight loss", "weight gain", "appetite changes", "overeating", "loss of appetite",
            "insomnia", "trouble sleeping", "difficulty falling asleep", "hypersomnia", "excessive sleep",
            "fatigue", "low energy", "tiredness", "lethargy",
            "feelings of worthlessness", "self-doubt", "excessive guilt", "self-blame",
            "difficulty concentrating", "poor focus", "trouble making decisions", "memory problems",
            "suicidal thoughts", "thoughts of death", "suicide attempts", "self-harm",
            "headaches", "chronic pain", "stomach issues", "physical pain with no clear cause",
            "hopelessness", "emotional numbness", "irritability", "negative thoughts"
        ],
        "OCD.html": [
            "fear of contamination", "germophobia", "fear of germs", "contamination anxiety",
            "unwanted thoughts", "intrusive thoughts", "aggressive thoughts", "taboo thoughts",
            "symmetry obsession", "orderliness", "need for exactness", "perfectionism",
            "excessive doubts", "compulsive reassurance seeking", "constant need for reassurance",
            "fear of harming others", "fear of harming oneself", "unintentional harm anxiety",
            "compulsive cleaning", "excessive handwashing", "obsessive hygiene",
            "checking locks repeatedly", "repetitive checking", "compulsive checking",
            "counting compulsions", "repeating words", "silent counting",
            "arranging objects", "fixation on order", "organization compulsion",
            "reassurance seeking", "compulsive questioning", "obsessive fears"
        ],
        "phobia.html": [
            "intense fear", "extreme anxiety", "panic attacks", "rapid heartbeat", 
            "shortness of breath", "sweating", "trembling", "shaking", 
            "dizziness", "lightheadedness", "nausea", "dry mouth", 
            "chills", "hot flashes", "sense of impending doom", "fear of losing control", 
            "fear of fainting", "avoidance behavior", "difficulty functioning", 
            "muscle tension", "tight chest", "hyperventilation", 
            "overwhelming distress", "feeling detached from reality", "upset stomach"
        ],
        "ptsd.html": [
            "intrusive memories", "distressing memories", "flashbacks", "reliving trauma", 
            "nightmares", "severe emotional distress", "trauma reminders", 
            "avoidance", "avoiding trauma-related thoughts", "avoiding places", 
            "avoiding activities", "avoiding people", "negative thoughts", 
            "hopelessness", "emotional numbness", "memory problems", 
            "difficulty maintaining relationships", "easily startled", 
            "hypervigilance", "self-destructive behavior", "substance abuse", 
            "trouble sleeping", "difficulty concentrating", "anger", "irritability"
        ],
        "sad.html": [
            "intense fear of social situations", "fear of judgment", "fear of public speaking", 
            "fear of meeting new people", "excessive worry", "fear of embarrassment", 
            "fear of humiliation", "sweating", "blushing", "trembling", "rapid heartbeat", 
            "nausea", "difficulty making eye contact", "difficulty speaking", 
            "fear of being the center of attention", "fear of negative evaluation", 
            "fear of rejection", "avoidance of social situations", "extreme discomfort in social settings", 
            "anticipatory anxiety", "fear before events", "difficulty forming relationships", 
            "difficulty maintaining relationships", "persistent self-doubt", 
            "over-analyzing social interactions"
        ],
        "schizophrenia.html": [
            "hallucinations", "hearing things that are not real", "seeing things that are not real", 
            "feeling things that are not real", "delusions", "false beliefs", "paranoia", 
            "grandiosity", "disorganized thinking", "incoherent speech", "trouble focusing", 
            "unpredictable thoughts", "movement disorders", "unusual body movements", 
            "lack of responsiveness", "flat affect", "reduced emotional expression", 
            "social withdrawal", "isolation", "difficulty initiating activities", 
            "difficulty sustaining activities", "decreased motivation", 
            "neglect of personal hygiene", "working memory problems", "decision-making difficulties", 
            "difficulty concentrating", "difficulty following conversations", 
            "impaired ability to plan", "impaired ability to execute tasks"
        ],
        "stress.html": [
            "headaches", "migraines", "muscle tension", "muscle pain", "fatigue", "low energy", 
            "digestive problems", "increased heart rate", "high blood pressure", "sleep disturbances", 
            "insomnia", "anxiety", "nervousness", "irritability", "mood swings", "sadness", 
            "depression", "feeling overwhelmed", "restlessness", "agitation", "difficulty concentrating", 
            "forgetfulness", "racing thoughts", "negative thinking patterns", "inability to make decisions", 
            "changes in appetite", "overeating", "undereating", "social withdrawal", "procrastination", 
            "avoidance", "increased alcohol use", "increased drug use", "increased tobacco use", 
            "nervous habits", "nail-biting"
        ]
    };

   


    form.addEventListener("submit", (event) => {
        event.preventDefault(); 

        const userSymptom = symptomInput.value.toLowerCase().trim();
        console.log("Symptom entered:", userSymptom);

        resultDiv.innerHTML = ""; 

        if (!userSymptom) {
            resultDiv.textContent = "Please enter a symptom.";
            resultDiv.style.color = "red";
            return;
        }

        let matchingDisorders = [];

        Object.entries(symptomToPage).forEach(([page, symptoms]) => {
            if (symptoms.includes(userSymptom)) {
                matchingDisorders.push({ page, name: symptoms[0] }); // Use first symptom as disorder name
            }
        });

        
       

        if (matchingDisorders.length > 0) {
           
            const heading = document.createElement("h3");
            heading.textContent = "Matching Disorders:";
            heading.style.color = "black";
            heading.style.fontWeight = "bold";
            heading.style.marginBottom = "10px";
            heading.style.marginLeft = "50px";
            heading.style.textAlign = "left";
            heading.style.fontSize = "25px";
            resultDiv.appendChild(heading);

           

            
            const list = document.createElement("ul");

            
            matchingDisorders.forEach(({ page, name }) => {
                const listItem = document.createElement("li");

                
                const link = document.createElement("a");
                
                link.href = page;
                // link.textContent = `${name} (Read More)`;
                const disorderName = page.replace(".html", "").toUpperCase(); 
                link.textContent = `${disorderName} (Read More)`;
                link.style.textDecoration = "underline";
                link.style.color = "blue";
                link.style.fontWeight = "bold";
                link.style.display = "inline-block";
                link.style.marginTop = "5px";
                link.style.marginLeft = "50px";

                listItem.appendChild(link);
                list.appendChild(listItem);
            });

            resultDiv.appendChild(list);
        } else {
            resultDiv.innerHTML = `<p class="no-match-message" >No matching disorders found. Please try again.</p>`;
            searchSymptomOnGoogle(userSymptom);
        }

        symptomInput.value = "";
    });

    
    function searchSymptomOnGoogle(symptom) {
        const searchQuery = `https://www.google.com/search?q=${encodeURIComponent(symptom + " mental health")}`;

        
        const googleSearchDiv = document.createElement("div");
        googleSearchDiv.innerHTML = `
            <p>Click the link below to view more details on Google:</p>
            <a href="${searchQuery}" target="_blank" class="google-search-link">Search "${symptom}" on Google</a>
        `;
        resultDiv.appendChild(googleSearchDiv);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("tracking-form");
    const resultDiv = document.getElementById("tracking-result");
    
    // Load previous tracking data
    function loadTrackingData() {
        const trackingData = JSON.parse(localStorage.getItem("trackingData")) || [];
        displayTrackingData(trackingData);
    }
    
    // Display tracking data
    function displayTrackingData(data) {
        resultDiv.innerHTML = "<h3>Previous Entries:</h3>";
        if (data.length === 0) {
            resultDiv.innerHTML += "<p>No tracking data available.</p>";
            return;
        }
        data.slice(-5).reverse().forEach(entry => {
            resultDiv.innerHTML += `<p><strong>Date:</strong> ${entry.date} | <strong>Sleep:</strong> ${entry.sleep} hrs | <strong>Stress:</strong> ${entry.stress}/10 | <strong>Mood:</strong> ${entry.mood}/10</p>`;
        });
    }
    
    // Handle form submission
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const sleep = document.getElementById("sleep").value;
        const stress = document.getElementById("stress").value;
        const mood = document.getElementById("mood").value;
        
        if (!sleep || !stress || !mood) {
            alert("Please fill in all fields.");
            return;
        }
        
        const trackingData = JSON.parse(localStorage.getItem("trackingData")) || [];
        const newEntry = {
            date: new Date().toLocaleDateString(),
            sleep: sleep,
            stress: stress,
            mood: mood
        };
        
        trackingData.push(newEntry);
        localStorage.setItem("trackingData", JSON.stringify(trackingData));
        
        displayTrackingData(trackingData);
        form.reset();
    });
    
    loadTrackingData();
});

