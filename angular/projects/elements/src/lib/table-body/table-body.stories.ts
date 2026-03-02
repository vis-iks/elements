import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTableBodyDirective } from '../vscode-table-body.directive';

const meta: Meta<VscodeTableBodyDirective> = {
  title: 'Components/Table Body',
  component: VscodeTableBodyDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTableBodyDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-table-body>Table Body</vscode-table-body>',
  }),
};
