import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeProgressRingDirective } from '../vscode-progress-ring.directive';

const meta: Meta<VscodeProgressRingDirective> = {
  title: 'Components/Progress Ring',
  component: VscodeProgressRingDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeProgressRingDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-progress-ring>Progress Ring</vscode-progress-ring>',
  }),
};
