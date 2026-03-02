import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeToolbarButtonDirective } from '../vscode-toolbar-button.directive';

const meta: Meta<VscodeToolbarButtonDirective> = {
  title: 'Components/Toolbar Button',
  component: VscodeToolbarButtonDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeToolbarButtonDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-toolbar-button>Toolbar Button</vscode-toolbar-button>',
  }),
};
