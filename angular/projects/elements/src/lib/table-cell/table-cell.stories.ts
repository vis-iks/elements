import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTableCellDirective } from '../vscode-table-cell.directive';

const meta: Meta<VscodeTableCellDirective> = {
  title: 'Components/Table Cell',
  component: VscodeTableCellDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTableCellDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-table-cell>Table Cell</vscode-table-cell>',
  }),
};
