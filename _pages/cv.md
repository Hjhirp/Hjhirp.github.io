---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* M.S. in Computer Science, University of Illinois at Chicago, 2025
* B.Tech. in Computer Science and Engineering, Nirma University, 2023

Work experience
======
* Aug 2024 – Present: Graduate Research Assistant (LLM Alignment and RL Model Implementation)
  * University of Illinois at Chicago, Computer Science Department
  * Duties includes: 
    * Enhancing large language models (LLMs) post-supervised fine-tuning (SFT) by exploring advanced reinforcement learning (RL) techniques beyond proximal policy optimization (PPO) for improved alignment and efficiency
    * Accelerated LLM training by 54% via distributed optimization with DeepSpeed/Accelerate; integrated W&B for automated hyperparameter tuning and experiment tracking across HPC clusters
    * Led thesis on treatment plan prediction using Guided Policy Gradient, incorporating clinician feedback and symptom data for personalized care; achieved ~80% alignment with doctor decisions.
    * Extracted evidence from medical conversations to inform model evaluation and drive clinician-guided research impact.

* Oct 2023 – Present: Graduate Researcher Assistant (Machine Learning Engineering)
  * University of Illinois at Chicago, Neurology and Rehabilitation Department, UI Health
  * Duties included:
    * Built real-time EEG ML pipeline using JAX & Azure ML; reduced latency 40%, enabling live clinical feedback.
    * Improved seizure detection accuracy from 91% to 99% using ensemble optimization.
    * Engineered data preprocessing and artifact removal modules to ensure clean signal input for downstream ML models.
    * Conducted statistical analyses of EEG signal patterns to correlate model predictions with neurologist assessments.
    * Participated in interdisciplinary meetings with clinicians to iteratively refine detection logic and improve trust in automated insights.

* June 2022 – July 2023: Machine Learning Engineer (Co-op)
  * Cactus Communications, Mumbai, India
  * Duties included:
    * Developed scalable GPT-3.5 NLP pipelines; optimized Inferentia-based deployments, saving $10K.
    * Automated evaluation and testing framework to track model robustness and regression.
    * Built summarization and keyword extraction systems using HuggingFace transformers to enhance scientific document processing.
    * Improved text generation quality by fine-tuning evaluation metrics on domain-specific corpora.

  
Skills
======
*	**ML/NLP**: LLMs (GPT, LLaMA, Mistral), Deep Learning, RL, NLP, CV, Summarization, Few-Shot Learning, Model Alignment (RLHF, DPO, QLoRA)
*	**Frameworks/Tools**: PyTorch, TensorFlow, Huggingface, Langchain, FastAPI, OpenCV, XGBoost, JAX
*	**Cloud/Infra**: AWS (SageMaker, Lambda, EC2), Azure ML Studio, GCP, Docker, Kubernetes, Terraform
*	**Programming**: Python, C++, Java, Scala, SQL
*	**Data & Platforms**: MongoDB, PostgreSQL, Spark, Prometheus, Git, Jupyter

Publications
======
  <ul>{% for post in site.portfolio reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>


Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
* Currently signed in to 43 different slack teams
