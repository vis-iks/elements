import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeContextMenuItemDirective } from '../vscode-context-menu-item.directive';

const meta: Meta<VscodeContextMenuItemDirective> = {
  title: 'Components/Context Menu Item',
  component: VscodeContextMenuItemDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeContextMenuItemDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-context-menu-item>Context Menu Item</vscode-context-menu-item>',
  }),
};
