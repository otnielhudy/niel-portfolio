import { Form, Input, Button, Row, Col } from "antd";
import { useContactForm } from "../../../controllers/useContactForm.controller.js";
import { profile } from "../../../models/profile.model.js";

const { TextArea } = Input;

export default function Contact() {
  const [form] = Form.useForm();
  const { status, actions } = useContactForm();

  return (
    <section id="contact" className="border-t border-line bg-black px-5 py-20 text-light-cream sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Row gutter={[48, 40]}>
          <Col xs={24} md={10}>
            <p className="font-mono text-[12px] tracking-wide text-white">04 / CONTACT</p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">
              Tell me about your next project.
            </h2>
            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white">
              Open to frontend roles and React.js projects — especially admin
              tooling, dashboards, and anything with a lot of data to make
              sense of.
            </p>

            <dl className="mt-10 space-y-4 font-mono text-[13px]">
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-white">EMAIL</dt>
                <dd>{profile.email}</dd>
              </div>
              <div className="flex justify-between gap-4 border-b border-white/10 pb-3">
                <dt className="text-white">BASED IN</dt>
                <dd>{profile.location}</dd>
              </div>
            </dl>
          </Col>

          <Col xs={24} md={14}>
            {status === "success" ? (
              <div className="border border-white/15 p-8">
                <p className="font-mono text-[12px] tracking-wide text-approved">MESSAGE READY</p>
                <p className="mt-3 text-[15px] text-paper">
                  Your email app should be open with the message drafted. If
                  it didn&apos;t launch, write directly to{" "}
                  <a href={`mailto:${profile.email}`} className="underline">
                    {profile.email}
                  </a>
                  .
                </p>
                <button
                  type="button"
                  onClick={() => {
                    actions.reset();
                    form.resetFields();
                  }}
                  className="mt-5 font-mono text-[12px] text-slate-light underline"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <Form form={form} layout="vertical" requiredMark={false} onFinish={actions.submit}>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span className="text-white">Name</span>}
                      name="name"
                      rules={[{ required: true, message: "Your name is required" }]}
                    >
                      <Input placeholder="Jane Cooper" size="large" />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item
                      label={<span className="text-white">Email</span>}
                      name="email"
                      rules={[
                        { required: true, message: "Your email is required" },
                        { type: "email", message: "Enter a valid email" },
                      ]}
                    >
                      <Input placeholder="jane@company.com" size="large" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label={<span className="text-white">Message</span>}
                  name="message"
                  rules={[{ required: true, message: "Tell me a little about the project" }]}
                >
                  <TextArea rows={5} placeholder="What are you building?" />
                </Form.Item>
                <Button
                  htmlType="submit"
                  size="large"
                  className="!h-12 !w-full !border-0 !bg-sky-blue !font-mono !text-[12px] !font-medium !tracking-wide !text-white sm:!w-auto sm:!px-8 rounded[4px]"
                >
                  SEND MESSAGE
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </div>
    </section>
  );
}
