"use client";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "@/components/Button";
import Card from "@/components/Card";
import Choice from "@/components/Choice";
import Stack from "@/components/molecules/Stack";
import Text from "@/components/molecules/Text";
import TextInput from "@/components/TextInput";
import { RiAccountBox2Fill, RiUserLocationFill } from "react-icons/ri";
import { useState } from "react";

const formSchema = z.object({
  billerType: z.enum(["", "local", "integrated"], {
    required_error: "Biller type is required",
  }),
  billerName: z.string().min(1, "Biller Name is required"),
  billerCategory: z.string().optional(),
  firstName: z.string().min(1, "First Name is required"),
  middleName: z.string().optional(),
  lastName: z.string().min(1, "Last Name is required"),
  email: z.string().email("Invalid email address"),
});

type FormData = z.infer<typeof formSchema>;

const Page = () => {
  const {
    control,
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      billerType: "",
      billerName: "",
      billerCategory: "",
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
    },
  });

  const [formDone, setFormDone] = useState(false);
  const billerType = watch("billerType");

  const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data);
  };

  return (
    <Stack gap={24} align="center" className="h-fit m-[5%]">
      <Stack align="center" className="w-full" gap={8}>
        <Text className="brandedText" size="display" weight="bold">
          Register to be a Partner
        </Text>
        <Text size="body-large">
          Complete the information asked to get started
        </Text>
      </Stack>

      {formDone ? (
        <form onSubmit={handleSubmit(onSubmit)} className="w-[500px]">
          <Stack gap={16} className="w-full">
            {!billerType ? (
              <BillerTypeForm setValue={setValue} />
            ) : (
              <Stack gap={12} className="w-full">
                <BillerInfoForm
                  register={register}
                  errors={errors}
                  control={control}
                />
                <Stack horizontal gap={8}>
                  <Button fullWidth onClick={() => setValue("billerType", "")}>
                    Back
                  </Button>
                  <Button
                    fullWidth
                    type="submit"
                    intent="primary"
                    disabled={!billerType}
                  >
                    Next
                  </Button>
                </Stack>
              </Stack>
            )}
          </Stack>
        </form>
      ) : (
        <SuccessScreen />
      )}
    </Stack>
  );
};

const BillerTypeForm = ({
  setValue,
}: {
  setValue: (field: "billerType", value: "local" | "integrated") => void;
}) => (
  <Card
    className="h-fit w-full max-w-full"
    title="Select biller type"
    subtitle="We will ask you to fill out information based on your selection"
  >
    <Stack className="p-[20px] pb-0">
      <Choice.Group>
        <label
          onClick={() => setValue("billerType", "local")}
          className="cursor-pointer"
        >
          <Choice.Item
            label="Register as a Local Biller"
            value="local"
            icon={RiUserLocationFill}
            description="Operate with a single wallet"
          />
        </label>
        <label
          onClick={() => setValue("billerType", "integrated")}
          className="cursor-pointer"
        >
          <Choice.Item
            label="Register as an Integrated Biller"
            value="integrated"
            icon={RiAccountBox2Fill}
            description="Operate with a decentralized wallet for each branch"
          />
        </label>
      </Choice.Group>
    </Stack>
  </Card>
);

const BillerInfoForm = ({
  // register,
  errors,
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  errors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: any;
}) => {
  return (
    <Card
      className="h-fit w-full max-w-full"
      title="Complete your information"
      subtitle="Provide data on each field below"
    >
      <Stack gap={16} className="p-[20px] pb-0">
        <Stack gap={10}>
          <Text size="body" weight="medium">
            Biller Information
          </Text>
          <Stack horizontal gap={12}>
            <Controller
              name="billerName"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Biller Name"
                  error={errors.billerName?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="billerCategory"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Category"
                  placeholder="Select a category"
                  error={errors.billerCategory?.message}
                  {...field}
                />
              )}
            />
          </Stack>
        </Stack>
        <hr className="border-subtle" />
        <Stack gap={10}>
          <Text size="body" weight="medium">
            User account
          </Text>
          <Stack horizontal gap={12}>
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="First Name"
                  placeholder="ex. Juan"
                  error={errors.firstName?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="middleName"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Middle Name"
                  placeholder="ex. Santos"
                  error={errors.middleName?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextInput
                  label="Last Name"
                  placeholder="ex. Delos Santos"
                  error={errors.lastName?.message}
                  {...field}
                />
              )}
            />
          </Stack>

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextInput
                label="Email"
                placeholder="Enter a valid email address"
                error={errors.email?.message}
                {...field}
              />
            )}
          />
        </Stack>
      </Stack>
    </Card>
  );
};

const SuccessScreen = () => {
  return <Card className="items-center">Thanks for registering!</Card>;
};

export default Page;
