import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeDividerDirective } from '../vscode-divider.directive';

const meta: Meta<VscodeDividerDirective> = {
  title: 'Components/Divider',
  component: VscodeDividerDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeDividerDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-divider>Divider</vscode-divider>',
  }),
};
