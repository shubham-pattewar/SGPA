function getGradePoint(marks) {
    if (marks >= 90) return { grade: 'O', point: 10 };
    else if (marks >= 80) return { grade: 'A+', point: 9 };
    else if (marks >= 70) return { grade: 'A', point: 8 };
    else if (marks >= 60) return { grade: 'B+', point: 7 };
    else if (marks >= 50) return { grade: 'B', point: 6 };
    else if (marks >= 45) return { grade: 'C', point: 5 };
    else if (marks >= 40) return { grade: 'P', point: 4 };
    else return { grade: 'F', point: 0 };
}

function calculateSGPA(semester) {
    let subjects, resultElement;

    if (semester === 'sem1') {
        subjects = [
            { name: 'LAC', credits: 4, maxMarks: 100 },
            { name: 'AP', credits: 3, maxMarks: 100 },
            { name: 'CPP', credits: 3, maxMarks: 100 },
            { name: 'ECM', credits: 3, maxMarks: 100 },
            { name: 'DTI', credits: 1, maxMarks: 25 },
            { name: 'IKS', credits: 2, maxMarks: 50 },
            { name: 'APLab', credits: 1, maxMarks: 25 },
            { name: 'CPPLab', credits: 1, maxMarks: 25 },
            { name: 'ECMLab', credits: 1, maxMarks: 25 },
            { name: 'DTILab', credits: 1, maxMarks: 25 }
        ];
        resultElement = document.getElementById('sem1Result');

    } else if (semester === 'sem2') {
        subjects = [
            { name: 'DET', credits: 4, maxMarks: 100 },
            { name: 'AC', credits: 3, maxMarks: 100 },
            { name: 'EEE', credits: 3, maxMarks: 100 },
            { name: 'CAD', credits: 3, maxMarks: 100 },
            { name: 'PC', credits: 1, maxMarks: 25 },
            { name: 'ACLab', credits: 2, maxMarks: 25 },
            { name: 'EEELab', credits: 2, maxMarks: 25 },
            { name: 'CADLab', credits: 2, maxMarks: 25 },
            { name: 'PCLab', credits: 2, maxMarks: 25 },
            { name: 'LLC', credits: 4, maxMarks: 50 },
            { name: 'PCC', credits: 2, maxMarks: 50 }
        ];
        resultElement = document.getElementById('sem2Result');

    } else if (semester === 'sem3') {
        subjects = [
            { name: 'DMS', credits: 3, maxMarks: 100 },
            { name: 'CN', credits: 3, maxMarks: 100 },
            { name: 'CNL', credits: 1, maxMarks: 50 },
            { name: 'OOC', credits: 3, maxMarks: 100 },
            { name: 'CEP', credits: 2, maxMarks: 50 },
            { name: 'MDM', credits: 2, maxMarks: 50 },
            { name: 'RUTA', credits: 2, maxMarks: 50 },
            { name: 'OEC', credits: 4, maxMarks: 125 },
            { name: 'IPR', credits: 2, maxMarks: 50 }
        ];
        resultElement = document.getElementById('sem3Result');

    } else if (semester === 'sem4') {
        subjects = [
            { name: 'AT', credits: 3, maxMarks: 100 },
            { name: 'DS', credits: 3, maxMarks: 100 },
            { name: 'DSL', credits: 1, maxMarks: 50 },
            { name: 'AOOC', credits: 3, maxMarks: 100 },
            { name: 'MDM', credits: 2, maxMarks: 50 },
            { name: 'ES', credits: 2, maxMarks: 50 },
            { name: 'TPMS', credits: 2, maxMarks: 50 },
            { name: 'TTL', credits: 2, maxMarks: 50 },
            { name: 'OEC', credits: 2, maxMarks: 50 },
            { name: 'WD', credits: 2, maxMarks: 50 }
        ];
        resultElement = document.getElementById('sem4Result');

    } else if (semester === 'sem5') {
        subjects = [
            { name: 'CC', credits: 3, maxMarks: 100 },
            { name: 'CCL', credits: 1, maxMarks: 50 },
            { name: 'DAA', credits: 3, maxMarks: 100 },
            { name: 'APC', credits: 3, maxMarks: 100 },
            { name: 'AJT', credits: 2, maxMarks: 50 },
            { name: 'MDM', credits: 4, maxMarks: 125 },
            { name: 'OEC', credits: 2, maxMarks: 50 },
            { name: 'PEC', credits: 4, maxMarks: 125 }
        ];
        resultElement = document.getElementById('sem5Result');
        
    } else if (semester === 'sem6') {
        subjects = [
            { name: 'CD', credits: 3, maxMarks: 100 },
            { name: 'SD', credits: 3, maxMarks: 100 },
            { name: 'SDL', credits: 1, maxMarks: 50 },
            { name: 'SC', credits: 3, maxMarks: 100 },
            { name: 'MDM', credits: 2, maxMarks: 50 },
            { name: 'PEC2', credits: 4, maxMarks: 125 },
            { name: 'PEC3', credits: 4, maxMarks: 125 },
            { name: 'VSEC', credits: 2, maxMarks: 50 }
        ];
        resultElement = document.getElementById('sem6Result');
    }

    const form = document.getElementById(`${semester}Form`);
    const inputs = form.querySelectorAll('input');
    let allValid = true;

    // Validation
    inputs.forEach(input => {
        const max = parseFloat(input.getAttribute('max')) || 100;
        if (parseFloat(input.value) > max) {
            input.classList.add('invalid');
            allValid = false;
        } else {
            input.classList.remove('invalid');
        }
    });

    if (!allValid) {
        resultElement.innerHTML =
            '<div class="error">Please enter valid marks (within maximum limits)</div>';
        return;
    }

    let totalCredits = 0;
    let weightedGradePoints = 0;
    let i = 0;

    let resultsHTML = `
        <div class="grade-details">
            <h3>Subject-wise Grades:</h3>
            <table>
                <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Points</th>
                </tr>
    `;

    subjects.forEach(subject => {
        const marks = parseFloat(inputs[i].value);
        const percentage = (marks / subject.maxMarks) * 100;
        const { grade, point } = getGradePoint(percentage);

        totalCredits += subject.credits;
        weightedGradePoints += point * subject.credits;

        resultsHTML += `
            <tr>
                <td>${subject.name}</td>
                <td class="grade-${grade}">${grade}</td>
                <td>${point.toFixed(1)}</td>
            </tr>
        `;
        i++;
    });

    const sgpa = weightedGradePoints / totalCredits;
    resultsHTML += `</table></div>`;

    resultElement.classList.add('show-result');

    resultElement.innerHTML = `
        <div class="sgpa-result">
            <div class="sgpa-circle">
                <svg viewBox="0 0 36 36" class="circular-chart">
                    <path class="circle-bg"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <path class="circle-fill"
                        stroke-dasharray="${(sgpa / 10) * 100}, 100"
                        d="M18 2.0845
                        a 15.9155 15.9155 0 0 1 0 31.831
                        a 15.9155 15.9155 0 0 1 0 -31.831"/>
                    <text x="18" y="20.5" class="percentage">${sgpa.toFixed(2)}</text>
                    <text x="18" y="25" class="label">SGPA</text>
                </svg>
            </div>
            ${resultsHTML}
        </div>
    `;

    resultElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Live validation
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.addEventListener('blur', function () {
            const max = parseFloat(this.getAttribute('max')) || 100;
            if (parseFloat(this.value) > max) {
                this.classList.add('invalid');
            } else {
                this.classList.remove('invalid');
            }
        });
    });
});

