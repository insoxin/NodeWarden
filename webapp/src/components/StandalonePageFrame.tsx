import type { ComponentChildren } from 'preact';
import { APP_VERSION } from '@shared/app-version';

interface StandalonePageFrameProps {
  title: string;
  children: ComponentChildren;
}

export default function StandalonePageFrame(props: StandalonePageFrameProps) {
  return (
    <div className="standalone-shell">
      <div className="standalone-brand standalone-brand-outside">
        <img src="/logo-64.png" alt="NodeWarden logo" className="standalone-brand-logo" />
        <div>
          <div className="standalone-brand-title">BitWarden</div>
        </div>
      </div>

      <div className="auth-card">
        <h1 className="standalone-title">{props.title}</h1>
        {props.children}
      </div>


    </div>
  );
}
