import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTableHeaderCellDirective } from '../vscode-table-header-cell.directive';

const meta: Meta<VscodeTableHeaderCellDirective> = {
  title: 'Components/Table Header Cell',
  component: VscodeTableHeaderCellDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTableHeaderCellDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-table-header-cell>Table Header Cell</vscode-table-header-cell>',
  }),
};
