import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeLabelDirective } from '../vscode-label.directive';

const meta: Meta<VscodeLabelDirective> = {
  title: 'Components/Label',
  component: VscodeLabelDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeLabelDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-label>Label</vscode-label>',
  }),
};
