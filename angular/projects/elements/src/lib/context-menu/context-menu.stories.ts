import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeContextMenuDirective } from '../vscode-context-menu.directive';

const meta: Meta<VscodeContextMenuDirective> = {
  title: 'Components/Context Menu',
  component: VscodeContextMenuDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeContextMenuDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-context-menu>Context Menu</vscode-context-menu>',
  }),
};
