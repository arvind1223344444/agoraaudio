import { getExploreName } from '../utils/platform';

export const devConfig = {
  sdkKey: '2270115638',
  sdkSecret: '7hW0OD4MYw0wyorv6rQOBXm32eVAUQ',
  webEndpoint: 'https://us05web.zoom.us/j/2270115638?',
  topic: 'Arvind Rawat',
  name: `${getExploreName()}-${Math.floor(Math.random() * 1000)}`,
  password: 'V0h7E3',
  signature: '',
  sessionKey: '',
  userIdentity: '5081361418',
  // The user role. 1 to specify host or co-host. 0 to specify participant, Participants can join before the host. The session is started when the first user joins. Be sure to use a number type.
  role: 1
};
