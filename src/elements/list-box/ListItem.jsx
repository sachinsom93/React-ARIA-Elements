import React from 'react';
import { Item } from 'react-stately';

function ListItem({ children, ...rest }) {
  getChildNodes;
  return <Item {...rest}>{children}</Item>;
}

// Referring to Item's getCollectionNode
ListItem.getCollectionNode = Item.getCollectionNode;

export default ListItem;
