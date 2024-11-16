"use client";
import { useState } from "react";
import styles from "./school .module.css";  

export default function StudentGradeCalculator() {
    const [name, setName] = useState("");
    const [subjects, setSubjects] = useState(0);
    const [grades, setGrades] = useState([]);
    const [maxGrade, setMaxGrade] = useState("");
    const [result, setResult] = useState("");
    const [resultType, setResultType] = useState("");  

    const calculateResult = () => {
        if (!name || !subjects || !maxGrade || grades.includes("")) 
            return alert("برجاء ملئ جميع الحقول");
        
        const total = grades.reduce((sum, g) => sum + parseFloat(g), 0);
        const percentage = (total / (subjects * maxGrade)) * 100;

        if (percentage >= 50) {
            setResultType("success");  
            setResult(` ممتاز يا  ${name}. نسبتك هي ${percentage.toFixed(2)} %.`);
        } else {
            setResultType("failure");  
            setResult(`حظ اوفر المرة القادمة يا ${name}. نسبتك هي ${percentage.toFixed(2)} %.`);
        }
    };

    const resetForm = () => {
        setName("");
        setSubjects(0);
        setGrades([]);
        setMaxGrade("");
        setResult("");
        setResultType(""); 
    };

    return (
        <div dir="rtl" className={styles.container}>
            <h1>
            حاسبة النسبة المئوية للطلاب</h1>

            <div className={styles.inputGroup}>
                <label className={styles.label}>اسم الطالب:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className={styles.input} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>عدد المواد:</label>
                <input 
                    type="number" 
                    value={subjects || ""} 
                    onChange={(e) => {
                        const count = +e.target.value;
                        setSubjects(count);
                        setGrades(Array(count).fill(""));
                    }} 
                    className={styles.input} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>الحد الأقصى للدرجة لكل مادة:</label>
                <input 
                    type="number" 
                    value={maxGrade || ""} 
                    onChange={(e) => setMaxGrade(+e.target.value)} 
                    className={styles.input} 
                />
            </div>

            {grades.map((grade, i) => (
                <div key={i} className={styles.inputGroup}>
                    <label className={styles.label}>درجة المادة {i + 1}:</label>
                    <input 
                        type="number" 
                        value={grade} 
                        onChange={(e) => {
                            const newGrades = [...grades];
                            newGrades[i] = e.target.value;
                            setGrades(newGrades);
                        }} 
                        className={styles.input} 
                    />
                </div>
            ))}

            <div className={styles.buttonGroup}>
                <button onClick={calculateResult} className={styles.button}>احسب</button>
                <button onClick={resetForm} className={styles.button}>طالب جديد</button>
            </div>

            {result && (
    <>
        <h1 className={`${styles.natega} ${styles[resultType]}`}>{resultType === "success" ? "ناجح" : "راسب"}</h1>
        <h2 className={`${styles.result} ${styles[resultType]}`}>{result}</h2>
    </>
)}

        </div>
    );
}
/* "use client";
import { useState } from "react";
import styles from "./school .module.css";  

export default function StudentGradeCalculator() {
    const [name, setName] = useState("");
    const [subjects, setSubjects] = useState(0);
    const [grades, setGrades] = useState([]);
    const [maxGrade, setMaxGrade] = useState("");
    const [result, setResult] = useState("");
    const [resultType, setResultType] = useState("");  

    const calculateResult = () => {
        if (!name || !subjects || !maxGrade || grades.includes("")) 
            return alert("Please fill in all fields!");
        
        const total = grades.reduce((sum, g) => sum + parseFloat(g), 0);
        const percentage = (total / (subjects * maxGrade)) * 100;

        if (percentage >= 50) {
            setResultType("success");  
            setResult(`Excellent, ${name}! Your percentage is ${percentage.toFixed(2)}%.`);
        } else {
            setResultType("failure");  
            setResult(`Better luck next time, ${name}. Your percentage is ${percentage.toFixed(2)}%.`);
        }
    };

    const resetForm = () => {
        setName("");
        setSubjects(0);
        setGrades([]);
        setMaxGrade("");
        setResult("");
        setResultType(""); 
    };

    return (
        <div className={styles.container}>
            <h1>Student Percentage Calculator</h1>

            <div className={styles.inputGroup}>
                <label className={styles.label}>Student Name:</label>
                <input 
                    type="text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    className={styles.input} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>Number of Subjects:</label>
                <input 
                    type="number" 
                    value={subjects || ""} 
                    onChange={(e) => {
                        const count = +e.target.value;
                        setSubjects(count);
                        setGrades(Array(count).fill(""));
                    }} 
                    className={styles.input} 
                />
            </div>

            <div className={styles.inputGroup}>
                <label className={styles.label}>Maximum Grade per Subject:</label>
                <input 
                    type="number" 
                    value={maxGrade || ""} 
                    onChange={(e) => setMaxGrade(+e.target.value)} 
                    className={styles.input} 
                />
            </div>

            {grades.map((grade, i) => (
                <div key={i} className={styles.inputGroup}>
                    <label className={styles.label}>Grade for Subject {i + 1}:</label>
                    <input 
                        type="number" 
                        value={grade} 
                        onChange={(e) => {
                            const newGrades = [...grades];
                            newGrades[i] = e.target.value;
                            setGrades(newGrades);
                        }} 
                        className={styles.input} 
                    />
                </div>
            ))}

            <div className={styles.buttonGroup}>
                <button onClick={calculateResult} className={styles.button}>Calculate</button>
                <button onClick={resetForm} className={styles.button}>New Student</button>
            </div>

            {result && (
                <h2 className={`${styles.result} ${styles[resultType]}`}>{result}</h2> 
            )}
        </div>
    );
}
 */