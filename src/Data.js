const data = [
    {
      question: "What is the name of the system in the human body that transports blood?",
      incorrectAnswers: [
        "Respiratory",
        "Digestive",
        "Lymphatic",
      ],
      correctAnswer: "Cardiovascular",
    },
  
    {
      question:
        "What hormone, produced in the pancreas, regulates blood sugar levels?",
      incorrectAnswers: [
        "Oxytocin",
        "Epinephrine",
        "Prolactin",
      ],
      correctAnswer: "Insulin",
    },
    {
      question: "Which is the largest gland in the human body?",
      incorrectAnswers: ["Pineal gland", "Pancreas", "Thyroid"],
      correctAnswer: "Liver",
    },
    {
      question: "Which of these hormones is produced by testes?",
      incorrectAnswers: ["Progesterone", "Vasopressin", "Adrenaline"],
      correctAnswer: "Testosterone",
    },
    {
      question: "Which muscle group covers the front and sides of the thigh?",
      incorrectAnswers: [
        "Hamstring muscle",
        "Adductor muscle",
        "Vastus muscle",
      ],
      correctAnswer: "Quadriceps femoris muscle",
    },
    {
      question: "Which of these is the principal muscle of respiration?",
      incorrectAnswers: [
        "Cilia",
        "Cardiac muscle",
        "Flagella",
      ],
      correctAnswer: "Diaphragm",
    },
    {
      question: "What is the transparent gel-like material in the eyeball?",
      incorrectAnswers: ["Cornea", "Mucous membrane", "Vascular layer"],
      correctAnswer: "Vitreous humour",
    },
    {
      question: "The permanent cessation of Spermatogenesis in the males is known as:",
      incorrectAnswers: [
        "Menarche",
        "Osteoporosis",
        "Menopause",
        
      ],
      correctAnswer: "Andropause", 
    },
    {
      question: "What is the name of the tissue that connects muscle to bone?",
      incorrectAnswers: [
        "Epithelial",
        "Cartilage",
        "Ligament",
      ],
      correctAnswer: "Tendon",
    },
    {
      question: "Which of these transports urine from the kidneys to the urinary bladder?",
      incorrectAnswers: [
        "Large intestine",
        "Urethra",
        "Small intestine",
      ],
      correctAnswer: "Ureter",
    },
    {
      question: "Which is the hardest tissue in the human body?",
      incorrectAnswers: [
        "Blood",
        "Bone",
        "Oral Mucosa",
      ],
      correctAnswer: "Enamel",
    },
    {
      question: "Which of these glands produces tears?",
      incorrectAnswers: [
        "Longitudinal",
        "Laryngeal",
        "Latissimal",
      ],
      correctAnswer: "Lachrymal",
    },
    {
      question: "What fraction of the human body is made up of blood?",
      incorrectAnswers: [
        "1/27",
        "1/4",
        "1/2",
      ],
      correctAnswer: "1/13",
    },
    {
      question: "Which of these is a neurological disorder?",
      incorrectAnswers: [
        "Psiatica",
        "Hashimoto syndrome",
        "Alopecia",
      ],
      correctAnswer: "Alzheimer disease",
    },
    {
      question: "Where are red blood corpuscles formed?",
      incorrectAnswers: [
        "the heart",
        "the latissimus dorsi",
        "the lungs",
      ],
      correctAnswer: "the bones",
    },
    {
      question: "Where are the adrenal glands located in the human body?",
      incorrectAnswers: [
        "in each lung",
        "behind the kneecaps",
        "inside the bladder",
      ],
      correctAnswer: "above the kidneys",
    },
    {
      question: "Which of the following is involved in speech function:",
      incorrectAnswers: [
        "Cerebellum",
        "Midbrain",
        "Pons",
      ],
      correctAnswer: "Broca area",
    },
    {
      question: "The inner surface of every blood vessel is lined by a thin layer of cells known as:",
      incorrectAnswers: [
        "Vein",
        "Arteriole",
        "Venule",
      ],
      correctAnswer: "Endothelium",
    },
    {
      question: "What is the formation of new blood vessels called?",
      incorrectAnswers: [
        "Pathogenesis",
        "Osteogenesis",
        "Catheterization",
      ],
      correctAnswer: "Angiogenesis",
    },
    {
      question: "Which of the following is connective tissue?",
      incorrectAnswers: [
        "Nerve tissue",
        "Epithelial tissue",
        "Cardiac tissue",
      ],
      correctAnswer: "Adipose tissue",
    },
    {
      question: "The period of contraction of the ventricles of the heart is known as:",
      incorrectAnswers: [
        "Cardiac cycle",
        "Cardiac output",
        "Diastole",
      ],
      correctAnswer: "Systole",
    },
    {
      question: "Which of the following is involved in speech function:",
      incorrectAnswers: [
        "Cerebellum",
        "Midbrain",
        "Pons",
      ],
      correctAnswer: "Broca area",
    },
    {
      question: "Which region of the brain produces oxytocin in human?",
      incorrectAnswers: [
        "Posterior pituitary gland",
        "Thalamus",
        "Pineal gland",
      ],
      correctAnswer: "Hypothalamus",
    },
    {
      question: "Which of these enzymes is responsible for the regulation of blood pressure?",
      incorrectAnswers: [
        "Amylase",
        "Trypsin",
        "Cellulase",
      ],
      correctAnswer: "Renin",
    },
    {
      question: "The inner surface of the stomach is lined by a mucous membrane known as:",
      incorrectAnswers: [
        "Submucosa",
        "Intestinal mucosa",
        "Parietal cells",
      ],
      correctAnswer: "Gastric mucosa",
    },
    {
      question: "Which membranes cover and protect the brain and spinal cord?",
      incorrectAnswers: [
        "Synovial Membrane",
        "Serous Membrane",
        "Mucous Membrane",
      ],
      correctAnswer: "Meninges",
    },
    {
      question: "Name the blood vessel that carries unfiltered blood from the aorta to the kidney.",
      incorrectAnswers: [
        "Coronary artery",
        "Pulmonary artery",
        "Renal veins",
      ],
      correctAnswer: "Renal artery",
    },
    {
      question: "What hormone stimulates the secretion of milk by the mammary glands?",
      incorrectAnswers: [
        "Dopamine",
        "Estrogen",
        "Oxytocin",
      ],
      correctAnswer: "Prolactin",
    },
    {
      question: "Which part of the human eye can be transplanted from a dead donor to a living person?",
      incorrectAnswers: [
        "Lens",
        "Iris",
        "Retina",
      ],
      correctAnswer: "Cornea",
    },
    {
      question: "Which of these tubes carries air in the lungs?",
      incorrectAnswers: [
        "Blood vessel",
        "Bronchi",
        "Larynx",
      ],
      correctAnswer: "Trachea",
    },
    {
      question: "What happens when the eyeball is longer from front to back?",
      incorrectAnswers: [
        "Double vision",
        "Glaucoma",
        "Hypermetropia",
      ],
      correctAnswer: "Myopia",
    },
    {
      question: "Which of these act as a storehouse for fats?",
      incorrectAnswers: [
        "Blood cells",
        "Red bone marrow",
        "Hematopoietic tissue",
      ],
      correctAnswer: "Yellow bone marrow",
    },
    {
      question: "The largest salivary gland in the human body is?",
      incorrectAnswers: [
        "Sublingual gland",
        "Glossopalatine gland",
        "Submaxillary gland",
      ],
      correctAnswer: "Parotid salivary gland",
    },
    {
      question: "What moves the food down the esophagus?",
      incorrectAnswers: [
        "Motility",
        "Constipation",
        "Segmentation",
      ],
      correctAnswer: "Peristalsis",
    },
    {
      question: "In humans, the highest vertebra that supports the skull is known as:",
      incorrectAnswers: [
        "Medulla",
        "Coccyx",
        "Sacrum",
      ],
      correctAnswer: "Atlas",
    },
    {
      question: "What is the appendix attached to in the human body?",
      incorrectAnswers: [
        "Pancreas",
        "Ileum",
        "Stomach",
      ],
      correctAnswer: "Cecum",
    },
    {
      question: "Which is the only organ in the human body that floats?",
      incorrectAnswers: [
        "Abdomen",
        "Kidney",
        "Liver",
      ],
      correctAnswer: "Lung",
    },
    {
      question: "Which part of the skull contains the brain?",
      incorrectAnswers: [
        "Occipital bone",
        "Mandible",
        "Maxilla",
      ],
      correctAnswer: "Cranium",
    },
    {
      question: "Which of these in the human body has no blood vessels?",
      incorrectAnswers: [
        "Sclera",
        "Pupil",
        "Iris",
      ],
      correctAnswer: "Cornea",
    },
    {
      question: "Which of these glands is present as a pair in the human body?",
      incorrectAnswers: [
        "Pancreas",
        "Hypothalamus",
        "Pituitary",
      ],
      correctAnswer: "Adrenal",
    },
  ];
  
  export default data;