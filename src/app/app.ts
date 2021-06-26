export default class App {
  //const a: HTMLElement;
  constructor() {
    this.start();
  }

  start(): void {
    const main = document.createElement('div');
    main.className = 'main';

    let profile = document.createElement('div');
    profile.className = 'profile';
    let img = document.createElement('img');
    img.src = './assets/images/code.jpg';
    profile.appendChild(img);
    main.appendChild(profile);

    const h2 = document.createElement('h2');
    h2.innerHTML = 'Welcome';
    main.appendChild(h2);

    const button = document.createElement('button');
    const span = document.createElement('span');
    span.className = 'icon-hello';
    button.appendChild(span);
    // const btnText = document.createTextNode('World');
    // button.appendChild(btnText);
    main.appendChild(button);

    document.body.appendChild(main);
    button.addEventListener('click', () => {
      h2.innerHTML = 'Hello World';
    });
  }
}
/*
export function testConsole(): void {
  console.log('test');
}
*/
