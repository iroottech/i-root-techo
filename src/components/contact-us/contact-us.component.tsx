import { useForm } from 'react-hook-form';
import styles from './contact-us.module.scss';
import {
	EmailIcon,
	FileInput,
	Input,
	LocationIcon,
	PhoneIcon,
} from '@/components';
import Link from 'next/link';

interface Props {}

export const ContactUs: React.FC<Props> = () => {
	const {
		handleSubmit,
		control,
		register,
		formState: { errors },
	} = useForm();

	const onSubmit = (data: any) => {
		console.log('data', data);
	};
	return (
		<div className={styles['contact-us']}>
			<div className={styles['contact-us__bg']}>
				<div className='container'>
					<div className={styles['contact-us__form-wrapper']}>
						<h2 className={styles['contact-us__form-title']}>
							Let’s Talk
						</h2>
						<p className={styles['contact-us__form-desc']}>
							We are working with clients of all sizes from new
							start-up business to well-established businesses
						</p>

						<form onSubmit={handleSubmit(onSubmit)}>
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
									className='accent-colorPrimary'
								/>
								<label
									htmlFor='subscibe'
									className='text-white'>
									Subscribe to newsletter
								</label>
							</div>

							<div className='flex justify-between flex-col items-center lg:flex-row gap-6'>
								<div>
									<FileInput />
								</div>
								<button
									type='submit'
									className={
										styles['contact-us__form-submit']
									}>
									submit
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>

			<div className={styles['contact-us__info']}>
				<div className='s-full lg:w-1/2'>
					<h3 className={styles['contact-us__title']}>
						Get in touch
					</h3>
					<p className={styles['contact-us__desc']}>
						We are working with clients of all sizes from new
						start-up business to well-established businesses
					</p>

					<h4 className={styles['contact-us__contacts-title']}>
						Contacts
					</h4>

					<div className={styles['contact-us__contacts']}>
						<div className={styles['contact-us__contacts-item']}>
							<span>
								<LocationIcon />
							</span>
							castroper st 273 44791, Germany ,Bochum
						</div>

						<div className={styles['contact-us__contacts-item']}>
							<span>
								<PhoneIcon />
							</span>
							<Link href={'tel:+4915754411184'}>
								(+49) 157 54411184
							</Link>
						</div>
						<div className={styles['contact-us__contacts-item']}>
							<span>
								<EmailIcon />
							</span>
							<Link href={'mailto:Info@iroottech.com'}>
								Info@iroottech.com
							</Link>
						</div>
					</div>
				</div>
				{/* <div className={styles['contact-us__map']}>s</div> */}
				<img
					src='/images/map.png'
					alt='map'
					className={styles['contact-us__map']}
				/>
			</div>
		</div>
	);
};