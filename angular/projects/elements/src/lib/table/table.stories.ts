import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTableDirective } from '../vscode-table.directive';

const meta: Meta<VscodeTableDirective> = {
  title: 'Components/Table',
  component: VscodeTableDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTableDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-table>Table</vscode-table>',
  }),
};
