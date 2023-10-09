import { email, maxLength, minLength, object, string } from 'valibot';

export const validationSchema = object({
  name: string([
    minLength(1, 'お名前を入力してください'),
    maxLength(20, 'お名前を短くしてください')
  ]),
  email: string([
    minLength(1, 'メールアドレスを入力してください'),
    maxLength(255, '255文字以内で入力してください'),
    email('メールアドレスの形式で入力してください')
  ]),
  message: string([
    minLength(1, 'お問い合わせ内容を入力してください'),
    maxLength(4098, 'お問い合わせ内容を短くしてください')
  ])
});
