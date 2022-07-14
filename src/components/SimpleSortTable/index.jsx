import React, { Component } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import { applyDrag, generateItems } from '../../utils/utils';

class Simple extends Component {
  constructor() {
    super();
    this.state = {
      items: generateItems(20, (index) => {
        return {
          id: index,
          data: 'Draggable' + index
        }
      })
    }
  }

  render() {
    return (
      <div>
        <div className="simple-page">
          <Container onDrop={e => this.setState({ items: applyDrag(this.state.items, e) })}>
            {this.state.items.map(p => {
              return (
                <Draggable key={p.id}>
                  <ListItem key={p.data} sx={{ p: 2, border: '1px dashed grey' }}>
                    {/* <Box component="span" sx={{ p: 2, border: '1px dashed grey' }}></Box> */}
                    <ListItemButton>
                      <ListItemText primary={p.data} />
                    </ListItemButton>
                  </ListItem>
                </Draggable>
              )
            })}
          </Container>
        </div>
      </div>
    )
  }
}


export default Simple;