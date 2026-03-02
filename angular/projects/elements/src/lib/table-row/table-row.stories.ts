import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTableRowDirective } from '../vscode-table-row.directive';

const meta: Meta<VscodeTableRowDirective> = {
  title: 'Components/Table Row',
  component: VscodeTableRowDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTableRowDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-table-row>Table Row</vscode-table-row>',
  }),
};
