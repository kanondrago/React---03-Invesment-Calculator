import { useState } from "react"
import { formatter } from "../util/investment"

export default function Table({
    anualData, 
    initialInvestment, 
    annualInvestment, 
    expectedReturn,
    duration
}) {


    return (
        <table id="result">
            <thead>
                <tr className="center">
                    <th>Year</th>
                    <th>Invesmentment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {anualData.map((item, index) => (
                    <tr key={index}>
                        <td className="center">{item.year}</td>
                        <td>{formatter.format(Math.round(item.valueEndOfYear))}</td>
                        <td>{formatter.format(Math.round(item.interest))}</td>
                        <td>{formatter.format(Math.round(item.valueEndOfYear - (Number(initialInvestment)+(index+1)*item.annualInvestment)))}</td>
                        <td>{formatter.format(Math.round(Number(initialInvestment)+(index+1)*item.annualInvestment))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}