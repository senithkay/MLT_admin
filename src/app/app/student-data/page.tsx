'use client';
import CustomPaginationActionsTable from "@/components/MIUI/table";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CSVLink } from 'react-csv';

function createData(firstName : string, lastName : string, email : string,address : string, message : string,) {
    return { firstName, lastName, email, address, message };
}
interface Rows {
    [key: string]: any;
    firstName:string,
    lastName:string,
    email:string,
    address:string,
    message:string
}

const rows:Rows[] = [
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),
    createData('Senith', "Uthsara", "senithkarunarathneu@gmail.com", "my address, 123 lane, address 1", "this course is so good"),

].sort((a, b) => (a.firstName < b.firstName ? -1 : 1));


const exportAsCsv = ()=>{
    const csvData:any[] = [];
    rows.forEach((row:Rows)=>{
        const values:any[] = [];
        const keys = Object.keys(row);
        keys.forEach((key)=>{
            const value = row[key]
            values.push(value)
        })
        csvData.push(values);
    })
    return csvData;
}

const page = ()=>{
    return (
        <div className={'text-black flex flex-col gap-[20px]'}>
            <Typography variant="h5" gutterBottom>
                Student data collected through the MLT website
            </Typography>
            <Typography className={'text-red-600'} variant="body1" gutterBottom>
                NOTE: Please make sure you handle these data responsibly.
            </Typography>
            <CustomPaginationActionsTable rows={rows}></CustomPaginationActionsTable>

            <CSVLink className={'w-fit ml-auto'} data={exportAsCsv()} filename="my-data.csv">
                <Button  variant="contained">Export as CSV</Button>
            </CSVLink>
        </div>
    )
}

export default page