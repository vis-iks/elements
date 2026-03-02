import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTextareaDirective } from '../vscode-textarea.directive';

const meta: Meta<VscodeTextareaDirective> = {
  title: 'Components/Textarea',
  component: VscodeTextareaDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTextareaDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-textarea>Textarea</vscode-textarea>',
  }),
};
