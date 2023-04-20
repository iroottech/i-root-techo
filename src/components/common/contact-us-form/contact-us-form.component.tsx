import { useForm } from 'react-hook-form';
import styles from './contact-us-form.module.scss';
import { FileInput, Input } from '@/components';
import { useRouter } from 'next/router';
interface Props {}
export const ContactUsForm: React.FC<Props> = () => {
	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm();
	const { pathname } = useRouter();

	const onSubmit = (data: any) => {
		console.log('data', data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
			<Input
				name='name'
				placeholder='Your name'
				label='Your name'
				control={control}
			/>
			<Input
				name='email'
				placeholder='Your email'
				label='Your email'
				control={control}
				type='email'
			/>
			<Input
				name='desciption'
				placeholder='Description of your project'
				label='Desciption'
				control={control}
				type='textarea'
			/>

			<div className='flex gap-4 items-center mb-6'>
				<input
					{...register('subscibe')}
					type='checkbox'
					name='subscibe'
					id='subscibe'
					className='accent-colorPrimary w-4 h-4 rounded'
				/>
				<label
					htmlFor='subscibe'
					className={`${
						pathname === '/' ? 'text-current' : 'text-white'
					}`}>
					Subscribe to newsletter
				</label>
			</div>

			<div
				className={`flex justify-between flex-col  ${
					pathname === '/'
						? 'items-start'
						: 'items-center md:flex-row'
				} gap-6`}>
				<div className='flex flex-col md:flex-row gap-4 items-center'>
					<FileInput />
					<p
						className={` font-semibold text-center md:text-left w-[236px] ${
							pathname === '/' ? 'text-current  ' : 'text-white'
						}`}>
						Up to 3 files in any format The maximum file size is
						10MB
					</p>
				</div>
				<button
					type='submit'
					className={`${styles['form__submit']} ${
						pathname === '/' ? styles['form__submit--primary'] : ''
					}`}>
					submit
				</button>
			</div>
		</form>
	);
};
