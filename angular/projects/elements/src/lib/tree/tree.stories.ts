import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTreeDirective } from '../vscode-tree.directive';

const meta: Meta<VscodeTreeDirective> = {
  title: 'Components/Tree',
  component: VscodeTreeDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTreeDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-tree>Tree</vscode-tree>',
  }),
};
