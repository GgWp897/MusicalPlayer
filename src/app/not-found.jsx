import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='not-found-page'>
      <h2>Эта страничка показана <span className='gradient-text'>потому что ничего не найдено</span></h2>
      <small>Возможно, ссылка, по которой вы перешли, не работает, или страница была удалена</small>
      <Link href="/">На главную</Link>
    </div>
  );
};