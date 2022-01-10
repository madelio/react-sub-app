import { List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';

export default function ResultList(props) {
    return  (
        <List>
            {props.locations.map( l => {
                return <ListItem key={l.clinicId}>
                    <ListItemAvatar>
                        <Avatar src={l.imageUrl} variant='square'/>
                    </ListItemAvatar>
                    <ListItemText  
                        primary={l.clinicName} 
                        secondary={l.address}/>
                </ListItem>
            })}
        </List>
    )
}