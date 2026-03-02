import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeButtonDirective } from '../vscode-button.directive';

const meta: Meta<VscodeButtonDirective> = {
  title: 'Components/Button',
  component: VscodeButtonDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeButtonDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-button>Primary Button</vscode-button>',
  }),
};

export const Secondary: Story = {
  render: () => ({
    template: '<vscode-button secondary>Secondary Button</vscode-button>',
  }),
};
