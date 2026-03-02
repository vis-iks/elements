import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTableHeaderDirective } from '../vscode-table-header.directive';

const meta: Meta<VscodeTableHeaderDirective> = {
  title: 'Components/Table Header',
  component: VscodeTableHeaderDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTableHeaderDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-table-header>Table Header</vscode-table-header>',
  }),
};
