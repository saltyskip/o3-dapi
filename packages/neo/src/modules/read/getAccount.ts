import { sendMessage } from '../../messaging';
import { Command } from '../../constants';

interface Account {
  address: string;
  label: string;
}

export function getAccount(): Promise<Account> {
  return sendMessage({
    command: Command.getAccount,
  });
}
