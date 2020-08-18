import React from 'react';
import {
  DetailsListLayoutMode,
  SelectionMode,
  IColumn,
} from '@fluentui/react/lib/DetailsList';
import { ShimmeredDetailsList } from '@fluentui/react/lib/ShimmeredDetailsList';
import { Block } from '../generated/graphql';

interface ListProps {
  items: any[] | null;
  loading: boolean;
  columns: IColumn[];
  onItemInvoked: (item: any) => void;
}

const List: React.FC<ListProps> = ({
  items,
  loading,
  columns,
  onItemInvoked,
}) => (
  <ShimmeredDetailsList
    setKey="set"
    items={items === null || loading ? [] : items}
    columns={columns}
    selectionMode={SelectionMode.none}
    layoutMode={DetailsListLayoutMode.justified}
    isHeaderVisible={true}
    enableShimmer={loading}
    onItemInvoked={onItemInvoked}
  />
);

export default List;

export type OmitListProps = Omit<ListProps, 'onItemInvoked' | 'items'>;

export interface BlockListProps extends OmitListProps {
  blocks: Block[] | null;
}
