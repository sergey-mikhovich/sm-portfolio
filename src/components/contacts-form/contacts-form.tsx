import { Button, Field, Modal } from '@/components'
import styled from 'styled-components'
import emailjs from '@emailjs/browser'
import { type FormEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const ContactsForm = () => {
  const form = useRef<HTMLFormElement | null>(null)
  const [isShowModal, setIsShowModal] = useState(false)
  const { t } = useTranslation()

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!form.current) return
    let value = e.currentTarget

    emailjs.sendForm('service_knpk8sm', 'template_iot9u2r', form.current, '4D4Sqo0622kiedngy').then(
      () => {
        setIsShowModal(true)
        value.reset()
      },
      (error) => {
        console.log(error.text)
      },
    )
  }

  return (
    <StyledForm ref={form} onSubmit={sendEmail}>
      <Field label={`${t('labelName', { ns: 'contacts' })}`} placeholder={`${t('fieldNamePlaceholder', { ns: 'contacts' })}`} name={'name'} />
      <Field type={'email'} label={`${t('labelEmail', { ns: 'contacts' })}`} placeholder={`${t('fieldEmailPlaceholder', { ns: 'contacts' })}`} name={'email'} />
      <Field label={`${t('labelMessage', { ns: 'contacts' })}`} placeholder={`${t('fieldMessagePlaceholder', { ns: 'contacts' })}`} name={'message'} />
      <Button type={'submit'}>{t('sendButton', { ns: 'main' })}</Button>
      {isShowModal && <Modal text={t('formSubmittedText', { ns: 'contacts' })} onClick={() => setIsShowModal(false)} />}
    </StyledForm>
  )
}

const StyledForm = styled.form`
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 20px;
    
  ${Button} {
      margin-top: 20px;
      min-height: 60px;
      padding: 0;
      cursor: pointer;
  }
`
