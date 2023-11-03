import React from 'react';
import { LineChart as LChart, Line, Tooltip, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const mathMarks = [
        {
            "student_id": 1,
            "student_name": "Alice",
            "math_mark": 95,
            "physics_mark": 88,
            "chemistry_mark": 92
        },
        {
            "student_id": 2,
            "student_name": "Bob",
            "math_mark": 88,
            "physics_mark": 90,
            "chemistry_mark": 85
        },
        {
            "student_id": 3,
            "student_name": "Charlie",
            "math_mark": 78,
            "physics_mark": 75,
            "chemistry_mark": 80
        },
        {
            "student_id": 4,
            "student_name": "David",
            "math_mark": 92,
            "physics_mark": 86,
            "chemistry_mark": 91
        },
        {
            "student_id": 5,
            "student_name": "Eve",
            "math_mark": 87,
            "physics_mark": 89,
            "chemistry_mark": 84
        },
        {
            "student_id": 6,
            "student_name": "Frank",
            "math_mark": 75,
            "physics_mark": 70,
            "chemistry_mark": 78
        },
        {
            "student_id": 7,
            "student_name": "Grace",
            "math_mark": 96,
            "physics_mark": 92,
            "chemistry_mark": 94
        },
        {
            "student_id": 8,
            "student_name": "Hank",
            "math_mark": 84,
            "physics_mark": 79,
            "chemistry_mark": 82
        },
        {
            "student_id": 9,
            "student_name": "Ivy",
            "math_mark": 91,
            "physics_mark": 88,
            "chemistry_mark": 90
        },
        {
            "student_id": 10,
            "student_name": "Jack",
            "math_mark": 89,
            "physics_mark": 91,
            "chemistry_mark": 86
        }
    ]


    return (
        <div>
            <LChart width={500} height={400} data={mathMarks}>
                <Line dataKey='math_mark' stroke="green" ></Line>
                <Line dataKey='physics_mark' stroke="yellow"></Line>
                <Line dataKey='chemistry_mark' stroke="red"></Line>
                <XAxis dataKey="math_mark" />
                <YAxis />
                <Tooltip />
            </LChart>
        </div>
    );
};

export default LineChart;