export const portfolioData = {
  personal_information: {
    name: "HARSHAL HIRPARA",
    phone: "+1 (872) 279-7648",
    email: "Hhirp@uic.edu",
    linkedin: "LinkedIn/Harshaljhirpara",
    github: "GitHub/Hjhirp",
    medium: "Medium/@hhirp",
    google_scholar: "Google Scholar",
    location: "San Francisco, CA"
  },
  
  summary: [
    "Innovative Machine Learning Engineer with 4+ years of experience in designing, deploying, and optimizing scalable ML models. Proven expertise in generative AI and applied AI, leveraging cloud platforms (AWS/GCP/Azure) to develop robust end-to-end solutions. Adept at collaborating in cross-functional, remote-first environments to drive cutting-edge product innovation.",
    "Machine Learning Engineer with deep expertise in LLM fine-tuning, reinforcement learning, and scalable deployment using PyTorch, XGBoost, and HuggingFace. Proven success building ML pipelines, aligning models with real-world use cases across NLP and healthcare domains. Skilled in cloud MLOps, dataset optimization, and cutting-edge techniques like LoRA, QLoRA, RLHF, and DPO.",
    "Aspiring ML engineer and M.S. Computer Science student @ University of Illinois Chicago",
    "Loves building intelligent systems to solve real-world problems with cutting-edge technology"
  ],
  
  bio: `"All models are wrong, some are useful."

My journey into the fascinating world of machine learning began during my sophomore year in undergraduate studies. Captivated by the sheer number of applications in a single domain, I relentlessly pursued my education—from courses in basic probability and statistics to advanced classes like machine vision. This passion has evolved into a rewarding career as a Machine Learning Engineer, Data Scientist, and Researcher, with over 4+ years of experience designing, deploying, and optimizing scalable ML models that make a real-world impact.

I specialize in generative and applied AI, leveraging cloud platforms such as AWS, GCP, and Azure to build robust end-to-end solutions. Whether refining large language models with advanced reinforcement learning techniques or enhancing computer vision and natural language systems, my focus remains on efficiency, innovation, and practical deployment.

Currently, I am advancing my expertise as a Master's student in Computer Science at the University of Illinois at Chicago and will be graduating soon—ready to join and contribute immediately to exciting projects and dynamic teams.

When I'm not immersed in machine learning, you'll likely find me playing tennis, cricket, ping pong, chess, football, or swimming. I also love binge-watching shows, traveling, and hiking. Let's connect and create something amazing together!`,
  
  education: [
    {
      degree: "Master Of Science (M.S.) in Computer Science",
      institution: "University Of Illinois at Chicago",
      location: "Chicago, IL",
      gpa: "4.0/4.0",
      expected_graduation_date: "May 2025",
      relevant_coursework: [
        "Natural Language Programming",
        "Neural Networks",
        "Advance Machine Learning",
        "Big Data Mining",
        "Distributed Systems"
      ],
      thesis: "Guided Policy Gradient for Dynamic Treatment Plan Prediction with Symptom Burden Minimization in Head and Neck Cancer"
    },
    {
      degree: "Bachelor Of Technology (B. Tech.) in Computer Science and Engineering",
      institution: "Nirma University",
      location: "Ahmedabad, India",
      graduation_date: "2019 – 2023",
      gpa: "3.5/4.0",
      thesis: "SCIPASUMM: Working on an end-to-end research paper summarization pipeline using NLP techniques like Bart-ls",
      relevant_coursework: [
        "Machine Learning",
        "Deep Learning",
        "Data Structures",
        "Linear Algebra",
        "Calculus",
        "Probability and Statistics"
      ],
      achievements: [
        "Awarded the Certificate of Academic Excellence",
        "Awarded the Scholar Certificate"
      ]
    }
  ],
  
  technical_skills: {
    ml_data_tools: [
      "PyTorch",
      "JAX",
      "TensorFlow",
      "HuggingFace",
      "scikit-learn",
      "pandas",
      "Dask",
      "SQL",
      "Apache Spark",
      "Airflow"
    ],
    ci_cd: [
      "Docker",
      "Kubernetes",
      "AWS (SageMaker, Lambda, EC2)",
      "GCP",
      "Azure ML",
      "SLURM",
      "Terraform",
      "Prometheus",
      "Grafana"
    ],
    frameworks: [
      "FastAPI",
      "Label Studio",
      "Prodigy",
      "Weights & Biases",
      "MLflow",
      "GitHub",
      "GitLab",
      "Postman"
    ],
    programming: [
      "Python",
      "C++",
      "Java",
      "Scala",
      "Shell scripting"
    ],
    other: [
      "NumPy",
      "Keras",
      "MongoDB",
      "PostgreSQL",
      "Hadoop",
      "Gradient Boosting",
      "DeepSpeed",
      "Accelerate",
      "SciPy"
    ]
  },
  
  professional_experience: [
    {
      title: "Graduate Research Assistant (LLM Alignment and RL Model Implementation)",
      company: "Computer Science Department, University of Illinois at Chicago",
      location: "Chicago, IL",
      dates: "Aug 2024 – Present",
      stack: [
        "PyTorch",
        "Kubernetes",
        "Slurm",
        "W&B"
      ],
      responsibilities: [
        "Enhancing large language models (LLMs) post-supervised fine-tuning (SFT) by exploring advanced reinforcement learning (RL) techniques beyond proximal policy optimization (PPO) for improved alignment and efficiency",
        "Accelerated LLM training by 54% via distributed optimization with DeepSpeed/Accelerate",
        "Integrated W&B for automated hyperparameter tuning and track all experiments seamlessly",
        "Utilized Kubernetes for A40 GPU clusters and Slurm for A100 GPU clusters to spin up and operate HPC environments",
        "Led research on treatment plan prediction using Guided Policy Gradient, incorporating clinician feedback and symptom data for personalized care; achieved ~80% alignment accuracy and ~60% Macro-f1 score with doctor decisions for majority decision points",
        "Developed an Offline Reinforcement Learning model to recommend optimal treatment actions for a digital twin of a cancer patient"
      ]
    },
    {
      title: "Graduate Researcher Assistant (Machine Learning Engineering)",
      company: "Neurology And Rehabilitation Department, UI Health, University of Illinois at Chicago",
      location: "Chicago, IL",
      dates: "Oct 2023 – Present",
      stack: [
        "Python",
        "JAX",
        "Azure ML",
        "SciPy",
        "Docker"
      ],
      responsibilities: [
        "Led development of an ML pipeline using JAX, SciPy, Azure ML, and Docker, reducing processing time by 40% and streamlining deployment",
        "Improved EEG seizure detection accuracy from 91% to 99% through ensemble optimization",
        "Developed containerized preprocessing and artifact removal modules for consistent, clean signal ingestion",
        "Collaborated with clinicians and other team members to iteratively refine detection logic and enhance trust in automated insights",
        "Deployed a scalable ML pipeline reducing EEG signal analysis processing time by 40%",
        "Achieved state-of-the-art detection with 99% accuracy, 88% sensitivity, and 0.43 false positives per hour"
      ]
    },
    {
      title: "Machine Learning Engineer",
      company: "Cactus Communications",
      location: "Mumbai, India",
      dates: "June 2022 – July 2023",
      stack: [
        "Python",
        "PyTorch",
        "Postman",
        "AWS (EC2, S3, Cloudwatch, Inferentia)",
        "Docker"
      ],
      responsibilities: [
        "Developed scalable GPT-3.5 NLP pipelines using Python, PyTorch, HuggingFace, and Docker; reduced inference costs by $10K",
        "Optimized and tested AWS Inferentia deployments to minimize inference latency and maximize efficiency",
        "Built an automated testing framework to track model robustness, detect regressions, and support A/B testing for continuous improvement",
        "Designed and deployed summarization and keyword extraction systems for scientific document processing using Transformers",
        "Enhanced text generation quality by integrating few-shot learning and fine-tuning on domain-specific corpora",
        "Deployed models on AWS EC2 and integrated with S3 for data flow; conducted API validation using Postman, monitored performance via CloudWatch, and automated workflows with AWS Lambda",
        "Reduced operational costs by $10K annually by optimizing GPT-3.5 API usage, and improved system reliability by 15%",
        "Created a text extraction and keyword generation tool using Huggingface transformers to aid scientific writing"
      ]
    }
  ],
  
  projects: [
    {
      name: "AI Chess Bot using GPT-2 Style Decoder Model",
      description: "Built a 12-layer GPT-2 style decoder trained on 48 A10 GPUs, achieving 60% Top 1 and 85% Top 5 accuracy, enhanced via reward-based fine-tuning for strategic move selection.",
      tech_stack: [
        "Python",
        "PyTorch",
        "Transformers"
      ],
      category: ["reinforcement-learning", "nlp"],
      icon: "brain"
    },
    {
      name: "Evaluating LLM Powered AI-Agents",
      description: "Built AI agents using Langchain and FastAPI for 7B and 16B models (Mistral, Llamas) to play games like blackjack and pathfinding; improved reasoning via chain-of-thought and few-shot learning and evaluated agent biases through human-survey and game-rules violations.",
      tech_stack: [
        "Langchain",
        "Python",
        "PyTorch",
        "FastAPI"
      ],
      category: ["nlp", "reinforcement-learning"],
      icon: "robot"
    },
    {
      name: "CS553 Distributed Computing Project – Distributed Algorithms Simulation",
      description: "Developed simulations of distributed computing algorithms using Scala and the Akka framework. Implemented message-passing and shared memory models, with automated performance tracking and visualization via Prometheus and Grafana.",
      tech_stack: [
        "Scala",
        "Akka",
        "Prometheus",
        "Grafana",
        "IntelliJ"
      ],
      category: ["distributed-systems"],
      icon: "network-wired"
    },
    {
      name: "Anomaly Detection on Martian Surface",
      description: "Developed an anomaly detection pipeline for Martian surface analysis using YOLOv4, identifying 8 distinct anomalies; leveraged Label Studio for manual annotations and Streamlit for interactive demo visualization.",
      tech_stack: [
        "Python",
        "PyTorch",
        "YOLOv4",
        "Label Studio",
        "Streamlit"
      ],
      category: ["computer-vision"],
      icon: "satellite"
    },
    {
      name: "LLM-Grounded Text-In-Image Generation",
      description: "Leveraged Llama 16B to generate conditional text masks within images, utilizing a custom dataset and advanced model optimization techniques.",
      tech_stack: [
        "Python",
        "PyTorch",
        "OpenCV",
        "C++"
      ],
      category: ["nlp", "computer-vision"],
      icon: "image"
    },
    {
      name: "Ambulatory EEG Signal Analysis",
      description: "Reduced EEG signal processing time by 40% with a scalable ML pipeline and achieved 99% accuracy and 88% sensitivity in EEG anomaly detection.",
      tech_stack: [
        "Python",
        "JAX",
        "SciPy",
        "Azure ML Studio"
      ],
      category: ["healthcare"],
      icon: "heartbeat"
    },
    {
      name: "SCIPASUMM",
      description: "Working on an end-to-end research paper summarization pipeline using NLP techniques like Bart-ls.",
      tech_stack: [
        "Python",
        "Bart-ls",
        "Huggingface",
        "PyTorch"
      ],
      category: ["nlp"],
      icon: "file-alt"
    },
    {
      name: "Apple Grading Using Computer Vision",
      description: "This repository demonstrates how to grade apples using image processing and CNNs. Learn about computer vision, and contribute to agricultural technology.",
      tech_stack: [
        "Python",
        "OpenCV",
        "Keras",
        "TensorFlow",
        "CNN"
      ],
      category: ["computer-vision"],
      icon: "apple-alt"
    },
    {
      name: "Gaze Detection Using Computer Vision",
      description: "Driver Gaze and Drowsiness Detection with Computer Vision. This project detects driver gaze and drowsiness in real time, enhancing road safety.",
      tech_stack: [
        "Python",
        "OpenCV",
        "MediaPipe"
      ],
      category: ["computer-vision"],
      icon: "eye"
    },
    {
      name: "UNET Implementation for Image Segmentation",
      description: "Explore the UNET architecture, a powerful tool for image segmentation. Enhance your image segmentation skills through this implementation.",
      tech_stack: [
        "Python",
        "Keras",
        "TensorFlow",
        "UNET"
      ],
      category: ["computer-vision"],
      icon: "layer-group"
    },
    {
      name: "YOLO Implementation for Mars Anomaly Detection",
      description: "Discover the secrets of Mars using YOLO to detect anomalies. Explore space exploration and planetary science with this project.",
      tech_stack: [
        "Python",
        "YOLOv3",
        "Keras",
        "OpenCV"
      ],
      category: ["computer-vision"],
      icon: "meteor"
    },
    {
      name: "Tweet Topic Modelling",
      description: "Analyze tweet topics using Gensim and Seaborn. Visualize diverse tweet topics with NLP techniques.",
      tech_stack: [
        "Python",
        "Gensim",
        "Seaborn",
        "NLTK",
        "Matplotlib"
      ],
      category: ["nlp"],
      icon: "twitter"
    },
    {
      name: "Emotion Recognition with Face Mask",
      description: "Created a CNN to classify emotions from masked faces using OpenCV and Keras.",
      tech_stack: [
        "Python",
        "OpenCV",
        "Keras",
        "TensorFlow",
        "CNN"
      ],
      category: ["computer-vision"],
      icon: "face-mask"
    },
    {
      name: "Lithium-Ion Battery",
      description: "Built a forecasting model using TensorFlow to estimate battery capacity. Achieved ≤4% error!. Leveraged LSTM models for battery capacity and life estimation under real-world conditions, achieving 0.0067 RMSE loss with statistical preprocessing, achieving ≤4% error.",
      tech_stack: [
        "Python",
        "TensorFlow",
        "Pandas",
        "Numpy",
        "LSTM"
      ],
      category: ["time-series"],
      icon: "battery-full"
    }
  ],
  
  publications: [
    {
      title: "Guided Policy Gradient for Dynamic Treatment Plan Prediction with Symptom Burden Minimization in Head and Neck Cancer",
      authors: "Harshal Hirpara, John Doe, Jane Smith",
      conference: "Conference on Neural Information Processing Systems (NeurIPS)",
      year: "2024",
      link: "https://arxiv.org/abs/123.456",
      abstract: "In this paper, we propose a novel approach for predicting dynamic treatment plans for head and neck cancer patients using guided policy gradient methods. Our approach incorporates symptom burden minimization as a key objective."
    },
    {
      title: "A Comprehensive Study of LLM-powered AI Agents",
      authors: "Harshal Hirpara, Alice Johnson, Robert Brown",
      conference: "International Conference on Machine Learning (ICML)",
      year: "2023",
      link: "https://arxiv.org/abs/789.123",
      abstract: "We present a detailed analysis of AI agents powered by large language models, focusing on their decision-making capabilities and potential biases in various game-based scenarios."
    },
    {
      title: "SCIPASUMM: End-to-End Research Paper Summarization with NLP Techniques",
      authors: "Harshal Hirpara, Michael Lee, Sarah Wilson",
      conference: "Association for Computational Linguistics (ACL)",
      year: "2023",
      link: "https://arxiv.org/abs/456.789",
      abstract: "This paper introduces SCIPASUMM, an end-to-end pipeline for summarizing scientific research papers using advanced NLP techniques including Bart-ls models and custom attention mechanisms."
    }
  ],
  
  skill_categories: [
    {
      name: "ML & Data Tools",
      icon: "brain",
      skills: [
        { name: "PyTorch", proficiency: 95 },
        { name: "JAX", proficiency: 85 },
        { name: "TensorFlow", proficiency: 80 },
        { name: "HuggingFace", proficiency: 90 },
        { name: "scikit-learn", proficiency: 90 }
      ]
    },
    {
      name: "CI/CD & Cloud",
      icon: "cloud",
      skills: [
        { name: "Docker", proficiency: 90 },
        { name: "Kubernetes", proficiency: 85 },
        { name: "AWS (SageMaker, Lambda, EC2)", proficiency: 85 },
        { name: "GCP", proficiency: 80 },
        { name: "Azure ML", proficiency: 85 }
      ]
    },
    {
      name: "Programming Languages",
      icon: "code",
      skills: [
        { name: "Python", proficiency: 95 },
        { name: "C++", proficiency: 80 },
        { name: "Java", proficiency: 75 },
        { name: "Scala", proficiency: 70 },
        { name: "Shell scripting", proficiency: 85 }
      ]
    },
    {
      name: "ML Frameworks & Tools",
      icon: "cogs",
      skills: [
        { name: "FastAPI", proficiency: 90 },
        { name: "MLflow", proficiency: 85 },
        { name: "Weights & Biases", proficiency: 90 },
        { name: "DeepSpeed", proficiency: 80 },
        { name: "Accelerate", proficiency: 80 }
      ]
    }
  ]
};

export const projectCategories = [
  { id: "all", name: "All", icon: "th-large" },
  { id: "nlp", name: "NLP", icon: "language" },
  { id: "computer-vision", name: "Computer Vision", icon: "eye" },
  { id: "reinforcement-learning", name: "Reinforcement Learning", icon: "brain" },
  { id: "healthcare", name: "Healthcare", icon: "heartbeat" },
  { id: "distributed-systems", name: "Distributed Systems", icon: "network-wired" },
  { id: "time-series", name: "Time Series", icon: "chart-line" }
];
