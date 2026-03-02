import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeToolbarContainerDirective } from '../vscode-toolbar-container.directive';

const meta: Meta<VscodeToolbarContainerDirective> = {
  title: 'Components/Toolbar Container',
  component: VscodeToolbarContainerDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeToolbarContainerDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-toolbar-container>Toolbar Container</vscode-toolbar-container>',
  }),
};
