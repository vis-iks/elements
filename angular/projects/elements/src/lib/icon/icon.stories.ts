import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeIconDirective } from '../vscode-icon.directive';

const meta: Meta<VscodeIconDirective> = {
  title: 'Components/Icon',
  component: VscodeIconDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeIconDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-icon>Icon</vscode-icon>',
  }),
};
