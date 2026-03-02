import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeProgressBarDirective } from '../vscode-progress-bar.directive';

const meta: Meta<VscodeProgressBarDirective> = {
  title: 'Components/Progress Bar',
  component: VscodeProgressBarDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeProgressBarDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-progress-bar>Progress Bar</vscode-progress-bar>',
  }),
};
