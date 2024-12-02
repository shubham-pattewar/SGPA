function getGradePoint(marks) {
    if (marks >= 90) return 10;
    else if (marks >= 80) return 9;
    else if (marks >= 70) return 8;
    else if (marks >= 60) return 7;
    else if (marks >= 50) return 6;
    else if (marks >= 45) return 5;
    else if (marks >= 40) return 4;
    else return 0;
}

function calculateSGPA(semester) {
    let totalCredits = 0;
    let weightedGradePoints = 0;
    let resultElement;

    let subjects;

    if (semester === 'sem1') {
        subjects = [
            { name: 'LAC', credits: 4, maxMarks: 100 },
            { name: 'AP', credits: 3, maxMarks: 100 },
            { name: 'CPP', credits: 3, maxMarks: 100 },
            { name: 'ECM', credits: 3, maxMarks: 100 },
            { name: 'DTI', credits: 1, maxMarks: 25 },
            { name: 'IKS', credits: 2, maxMarks: 50 },
            { name: 'AP Lab', credits: 1, maxMarks: 25 },
            { name: 'CPP Lab', credits: 1, maxMarks: 25 },
            { name: 'ECM Lab', credits: 1, maxMarks: 25 },
            { name: 'DTI Lab', credits: 1, maxMarks: 25 }
        ];
        resultElement = document.getElementById('sem1Result');
    } else if (semester === 'sem2') {
        subjects = [
            { name: 'DET', credits: 4, maxMarks: 100 },
            { name: 'AC', credits: 3, maxMarks: 100 },
            { name: 'EEE', credits: 3, maxMarks: 100 },
            { name: 'CAD', credits: 3, maxMarks: 100 },
            { name: 'PC', credits: 1, maxMarks: 25 },
            { name: 'AC Lab', credits: 2, maxMarks: 25 },
            { name: 'EEE Lab', credits: 2, maxMarks: 25 },
            { name: 'CAD Lab', credits: 2, maxMarks: 25 },
            { name: 'PC Lab', credits: 2, maxMarks: 25 },
            { name: 'LLC', credits: 4, maxMarks: 50 },
            { name: 'PCC', credits: 2, maxMarks: 50 }
        ];
        resultElement = document.getElementById('sem2Result');
    }

    const form = document.getElementById(`${semester}Form`);
    const inputs = form.querySelectorAll('input');

    let i = 0;
    subjects.forEach(subject => {
        const marks = parseFloat(inputs[i].value);
        const percentage = (marks / subject.maxMarks) * 100;
        const gradePoint = getGradePoint(percentage);
        totalCredits += subject.credits;
        weightedGradePoints += gradePoint * subject.credits;
        i++;
    });

    const sgpa = weightedGradePoints / totalCredits;
    resultElement.innerText = `Your SGPA for ${semester === 'sem1' ? 'Semester 1' : 'Semester 2'} is: ${sgpa.toFixed(2)}`;
}
