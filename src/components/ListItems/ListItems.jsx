import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const ListItem = (props) => {
  return (
    <Card>
      <CardMedia
        sx={{ height: 200, width: 300 }}
        image={props.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Agregar al carrito</Button>
      </CardActions>
    </Card>
  );
}

export default ListItem 