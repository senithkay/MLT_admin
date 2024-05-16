import {TextField} from "@mui/material";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

const page = () =>{
    return (
        <div className={'text-black xl:px-[300px] md:px-[100px] flex flex-col gap-[20px]'}>
           <div className={'flex flex-col'}>
               <Typography variant="h5" gutterBottom>
                   Edit the contact details here
               </Typography>
               <Typography variant="body1" gutterBottom>
                   Add the correct contact details in the following form and submit. This will change the details provided for the students in the main MLT website
               </Typography>
           </div>
           <div className={'flex flex-col'}>
               <Typography className={'text-red-600'} variant="body1" gutterBottom>
                   Affected areas:
               </Typography>
               <List dense={true} >
                   {['Page header', 'Page footer', 'Contact us page'].map((item, index) => (
                       <ListItem key={index}>
                           <ListItemText
                               className={'text-red-600'}
                               primary={item}
                           />
                       </ListItem>
                   ))}
               </List>
           </div>
            <form action="" className="form-horizontal border border-gray-500 flex flex-col gap-[30px] p-[20px] rounded-2xl">
                <div className="flex gap-[20px]">
                    <TextField id="telephone" label="Telephone" variant="outlined" />
                    <TextField id="mobile" label="Mobile" variant="outlined" />
                </div>
                <TextField id="email" label="Email" variant="outlined" />
                <TextField
                    id="address"
                    label="Address"
                    multiline
                    maxRows={4}
                />
                <Button variant="contained">Update Contact Details</Button>
            </form>
        </div>
    )
}

export default page;