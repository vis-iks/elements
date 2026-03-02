import type { Meta, StoryObj } from '@storybook/angular';
import { VscodeTextfieldDirective } from '../vscode-textfield.directive';

const meta: Meta<VscodeTextfieldDirective> = {
  title: 'Components/Textfield',
  component: VscodeTextfieldDirective,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<VscodeTextfieldDirective>;

export const Primary: Story = {
  render: () => ({
    template: '<vscode-textfield>Textfield</vscode-textfield>',
  }),
};
