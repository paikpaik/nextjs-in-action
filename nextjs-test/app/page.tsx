import ProductCard from "@/components/ProductCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Link href="/users">Users</Link>
      <ProductCard />
    </main>
  );
}
/**
 * Fast Refresh: 수정 사항을 저장할 때 전체 페이지 새로
 * 고침 없이 변경된 부분만을 빠르게 업데이트하여 개발 및
 * 디버깅을 더욱 편리하게 만드는 기능입니다.
 */
