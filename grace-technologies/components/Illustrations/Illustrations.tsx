import type { ComponentType } from 'react';
import type { IllustrationKey } from '@/lib/types';
import styles from './Illustrations.module.css';

/** Static decorative illustrations. Colours come from Illustrations.module.css, which reads the global tokens. */
export function WebIllustration() {
  return (
    <svg className={styles.illustration} viewBox="0 0 480 330" role="img" aria-label="Illustration of a website and a mobile app"><rect className={`${styles.surface} ${styles.surfaceStroke}`} x={20} y={24} width={340} height={236} rx={14} /><path className={`${styles.soft}`} d="M20 38a14 14 0 0 1 14-14h312a14 14 0 0 1 14 14v24H20z" /><circle className={`${styles.accent}`} cx={42} cy={43} r={5} /><circle className={`${styles.accent}`} cx={60} cy={43} r={5} /><rect className={`${styles.accent}`} x={42} y={86} width={190} height={16} rx={8} /><rect className={`${styles.soft}`} x={42} y={112} width={140} height={10} rx={5} /><rect className={`${styles.soft}`} x={42} y={130} width={170} height={10} rx={5} /><rect className={`${styles.accent}`} x={42} y={154} width={88} height={28} rx={14} /><rect className={`${styles.soft}`} x={250} y={82} width={92} height={100} rx={10} /><circle className={`${styles.accent}`} cx={296} cy={122} r={16} /><rect className={`${styles.soft}`} x={42} y={204} width={92} height={40} rx={8} /><rect className={`${styles.soft}`} x={146} y={204} width={92} height={40} rx={8} /><rect className={`${styles.soft}`} x={250} y={204} width={92} height={40} rx={8} /><rect className={`${styles.accent}`} x={316} y={108} width={132} height={210} rx={24} /><rect className={`${styles.inner}`} x={324} y={122} width={116} height={182} rx={16} /><rect className={`${styles.accent}`} x={336} y={140} width={64} height={10} rx={5} /><rect className={`${styles.soft}`} x={336} y={160} width={92} height={44} rx={8} /><rect className={`${styles.soft}`} x={336} y={212} width={92} height={12} rx={6} /><rect className={`${styles.accent}`} x={336} y={248} width={92} height={26} rx={13} /></svg>
  );
}


export function AiIllustration() {
  return (
    <svg className={styles.illustration} viewBox="0 0 480 330" role="img" aria-label="Illustration of an AI workflow with a human review step"><rect className={`${styles.surface} ${styles.surfaceStroke}`} x={16} y={116} width={92} height={104} rx={12} /><rect className={`${styles.accent}`} x={30} y={134} width={50} height={9} rx={4.5} /><rect className={`${styles.soft}`} x={30} y={154} width={64} height={8} rx={4} /><rect className={`${styles.soft}`} x={30} y={170} width={64} height={8} rx={4} /><rect className={`${styles.soft}`} x={30} y={186} width={40} height={8} rx={4} /><path className={`${styles.line}`} d="M114 168H168" /><circle className={`${styles.accent}`} cx={214} cy={168} r={46} /><circle className={`${styles.inner}`} cx={214} cy={168} r={17} /><circle className={`${styles.accent}`} cx={214} cy={168} r={7} /><path className={`${styles.line}`} d="M256 148C300 110 306 84 338 84" /><path className={`${styles.line}`} d="M256 188C300 226 306 252 338 252" /><rect className={`${styles.soft} ${styles.surfaceStroke}`} x={338} y={56} width={124} height={56} rx={12} /><rect className={`${styles.accent}`} x={354} y={76} width={60} height={9} rx={4.5} /><rect className={`${styles.accent}`} x={354} y={92} width={36} height={8} rx={4} /><circle className={`${styles.surface} ${styles.surfaceStroke}`} cx={400} cy={252} r={38} /><circle className={`${styles.accent}`} cx={400} cy={240} r={11} /><path className={`${styles.accent}`} d="M378 272c2-14 12-20 22-20s20 6 22 20z" /><path className={`${styles.line} ${styles.dashed}`} d="M400 112V212" /></svg>
  );
}


export function PayIllustration() {
  return (
    <svg className={styles.illustration} viewBox="0 0 480 330" role="img" aria-label="Illustration of a payment card, secure account and checkout"><rect className={`${styles.accent}`} x={24} y={70} width={210} height={130} rx={18} /><rect className={`${styles.inner}`} x={24} y={102} width={210} height={24} /><rect className={`${styles.inner}`} x={44} y={152} width={70} height={10} rx={5} /><rect className={`${styles.soft}`} x={44} y={172} width={44} height={8} rx={4} /><path className={`${styles.line}`} d="M244 135H292" /><path className={`${styles.accent}`} d="M302 135l-14-9v18z" /><path className={`${styles.surface} ${styles.surfaceStroke}`} d="M380 56l74 26v62c0 42-32 66-74 82-42-16-74-40-74-82V82z" /><path className={`${styles.line}`} d="M346 140l26 26 46-52" /><rect className={`${styles.surface} ${styles.surfaceStroke}`} x={40} y={236} width={170} height={60} rx={14} /><rect className={`${styles.accent}`} x={58} y={256} width={70} height={9} rx={4.5} /><rect className={`${styles.soft}`} x={58} y={274} width={110} height={8} rx={4} /><rect className={`${styles.accent}`} x={236} y={248} width={96} height={34} rx={17} /></svg>
  );
}


export function MktIllustration() {
  return (
    <svg className={styles.illustration} viewBox="0 0 480 330" role="img" aria-label="Illustration of a marketing dashboard and search"><rect className={`${styles.surface} ${styles.surfaceStroke}`} x={20} y={30} width={330} height={250} rx={14} /><rect className={`${styles.accent}`} x={42} y={52} width={110} height={12} rx={6} /><rect className={`${styles.soft}`} x={42} y={76} width={70} height={9} rx={4.5} /><rect className={`${styles.soft}`} x={56} y={190} width={34} height={66} rx={5} /><rect className={`${styles.soft}`} x={106} y={168} width={34} height={88} rx={5} /><rect className={`${styles.accent}`} x={156} y={140} width={34} height={116} rx={5} /><rect className={`${styles.soft}`} x={206} y={118} width={34} height={138} rx={5} /><rect className={`${styles.accent}`} x={256} y={96} width={34} height={160} rx={5} /><path className={`${styles.line}`} d="M50 170 120 140 176 122 232 96 300 70" /><circle className={`${styles.inner} ${styles.line}`} cx={300} cy={70} r={7} /><circle className={`${styles.surface} ${styles.line}`} cx={396} cy={196} r={48} /><path className={`${styles.line}`} d="M430 232l30 34" /><rect className={`${styles.accent}`} x={372} y={186} width={48} height={9} rx={4.5} /><rect className={`${styles.soft}`} x={372} y={204} width={32} height={8} rx={4} /></svg>
  );
}


export function TeamIllustration() {
  return (
    <svg className={styles.illustration} viewBox="0 0 480 330" role="img" aria-label="Illustration of two linked organisations collaborating"><circle className={`${styles.accent}`} cx={170} cy={165} r={110} /><circle className={`${styles.surface} ${styles.surfaceStroke}`} cx={310} cy={165} r={110} /><path className={`${styles.inner}`} d="M240 70a110 110 0 0 1 0 190 110 110 0 0 1 0-190z" opacity={0} /><circle className={`${styles.inner}`} cx={240} cy={165} r={38} /><path className={`${styles.line}`} d="M226 165l10 10 20-22" /><rect className={`${styles.inner}`} x={104} y={140} width={84} height={12} rx={6} /><rect className={`${styles.inner}`} x={104} y={164} width={56} height={10} rx={5} opacity={0.7} /><rect className={`${styles.accent}`} x={304} y={140} width={84} height={12} rx={6} /><rect className={`${styles.soft}`} x={304} y={164} width={56} height={10} rx={5} /></svg>
  );
}

export const ILLUSTRATIONS: Record<IllustrationKey, ComponentType> = {
  web: WebIllustration,
  ai: AiIllustration,
  pay: PayIllustration,
  mkt: MktIllustration,
  team: TeamIllustration,
};
