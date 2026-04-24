import { signIn } from "@/auth"

export default function LoginButton() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button className="flex items-center gap-3 bg-white border border-gray-200 px-6 py-2 rounded-full hover:bg-gray-50 transition-all shadow-sm">
        <img src="https://authjs.dev/img/providers/google.svg" alt="Google" width={20} />
        <span className="font-bold text-gray-700">Đăng nhập Google</span>
      </button>
    </form>
  )
}