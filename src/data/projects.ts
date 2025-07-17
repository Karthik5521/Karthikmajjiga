import { HeartPulse, Leaf, Brain, BriefcaseBusiness } from "lucide-react";

export const projects = [
  {
    name: "Heart Disease Prediction using Machine Learning",
    description:
      "Developed a machine learning-based system to predict the likelihood of heart disease using patient data from the UCI dataset.",
    keyFeatures: [
      "Implemented and compared multiple ML classifiers (SVM, Random Forest, XGBoost, etc.)",
      "Used data preprocessing techniques and feature selection to improve model accuracy",
      "Achieved highest prediction accuracy with XGBoost (81.3%)",
      "Published in IJARESM Journal (Vol. 10, Issue 6)",
    ],
    techStacks: [
      "Python",
      "Pandas",
      "Scikit-learn",
      "XGBoost",
      "Jupyter Notebook",
      "Matplotlib",
    ],
    icon: HeartPulse,
    gitLink: "https://github.com/karthik5521",
    bgColor: "from-rose-500 to-red-700",
  },
  {
    name: "Malaria Detection using Deep Learning",
    description:
      "Built a web-based diagnostic tool using CNNs to identify malaria from cell images, enabling rapid and automated diagnosis.",
    keyFeatures: [
      "Used Convolutional Neural Networks (CNN) for image classification",
      "Built Flask-based web interface for image upload and results display",
      "Tested model with malaria cell image dataset",
      "Automated detection with real-time prediction",
    ],
    techStacks: [
      "Python",
      "TensorFlow",
      "Keras",
      "Flask",
      "OpenCV",
      "HTML/CSS",
    ],
    icon: Brain,
    gitLink: "https://github.com/karthik5521/Malaria-detection-using-Deep-Learning",
    bgColor: "from-yellow-500 to-amber-700",
  },
  {
    name: "Crop Recommendation & Yield Prediction",
    description:
      "Designed a data-driven recommendation system to help farmers choose optimal crops based on soil and weather conditions.",
    keyFeatures: [
      "Predicted best-suited crop and estimated yield using ML algorithms",
      "Analyzed environmental and soil data",
      "Built interactive model using Flask",
      "Trained using real-world agricultural datasets",
    ],
    techStacks: [
      "Python",
      "Flask",
      "Scikit-learn",
      "Pandas",
      "Jupyter Notebook",
    ],
    icon: Leaf,
    gitLink: "https://github.com/karthik5521/Crop-Recommendation-and-Yeild-Prediction",
    bgColor: "from-green-600 to-lime-700",
  },
  {
    name: "EasyResume – ATS-Friendly Resume Builder",
    description:
      "A clean, user-friendly resume builder designed to generate ATS-compliant resumes with ease. Offers customizable templates and live preview functionality.",
    keyFeatures: [
      "Dynamic input fields for all resume sections",
      "Real-time resume preview with styling options",
      "Downloadable formats for export",
      "Built with performance and accessibility in mind",
    ],
    techStacks: [
      "React",
      "Vite",
      "JavaScript",
      "HTML/CSS",
      "Vercel",
    ],
    icon: BriefcaseBusiness,
    gitLink: "https://github.com/k2maan/easyresume",
    liveLink: "https://easyresume.vercel.app/",
    bgColor: "from-blue-600 to-cyan-800",
  },
];
