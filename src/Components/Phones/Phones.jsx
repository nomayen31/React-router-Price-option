import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Dna } from 'react-loader-spinner';



const Phones = () => {
    const [phones, setPhones] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res => res.json())
        // .then(data => setPhones(data.data) )

        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data;
                const phonesWithFakeData = phoneData.map(phone => {
                    const obj = {
                        name: phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj;
                })
                setPhones(phonesWithFakeData)
                console.log(phonesWithFakeData);
                setLoading(false)
            })
    }, [])
    return (
        <div>
            {loading && <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <Dna
                    visible={true}
                    height="120"
                    width="250"
                    ariaLabel="dna-loading"
                    wrapperStyle={{}}
                    wrapperClass="dna-wrapper"
                />
            </div>}

            <h2 className="text-5xl">{phones.length}</h2>
            <BarChart width={1200} height={400} data={phones}>
                <Bar dataKey="price" fill="#8884d8" />
                <XAxis dataKey="name" ></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Legend></Legend>
                <ResponsiveContainer></ResponsiveContainer>
                <CartesianGrid></CartesianGrid>
                <Cell></Cell>
            </BarChart>
        </div>
    );
};

export default Phones;


// 11.28