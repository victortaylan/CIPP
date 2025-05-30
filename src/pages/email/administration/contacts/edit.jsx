<<<<<<< HEAD
=======
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { Divider } from "@mui/material";
import { Grid } from "@mui/system";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
>>>>>>> 19ff0c5afad6c6a5ae20913ee784b5ef7dadd3b0
import { Layout as DashboardLayout } from "/src/layouts/index.js";
import { CippTablePage } from "/src/components/CippComponents/CippTablePage.jsx";
import { Edit, PersonAdd } from "@mui/icons-material";
import { Button } from "@mui/material";
import Link from "next/link";
import TrashIcon from "@heroicons/react/24/outline/TrashIcon";

const Page = () => {
  const pageTitle = "Contacts";

  const actions = [
    {
      label: "Edit Contact",
      link: "/email/administration/contacts/edit?id=[id]",
      multiPost: false,
      postEntireRow: true,
      icon: <Edit />,
      color: "warning",
      condition: (row) => !row.onPremisesSyncEnabled,
    },
    {
      label: "Remove Contact",
      type: "POST",
      url: "/api/RemoveContact",
      data: {
        GUID: "id",
        mail: "mail",
      },
      confirmText:
        "Are you sure you want to delete this contact? Remember this will not work if the contact is AD Synced.",
      color: "danger",
      icon: <TrashIcon />,
      condition: (row) => !row.onPremisesSyncEnabled,
    },
  ];

  const simpleColumns = ["displayName", "mail", "companyName", "onPremisesSyncEnabled"];

  return (
<<<<<<< HEAD
    <CippTablePage
      title={pageTitle}
      apiUrl="/api/ListContacts"
      actions={actions}
      simpleColumns={simpleColumns}
      cardButton={
        <>
          <Button
            component={Link}
            href="/email/administration/contacts/add"
            startIcon={<PersonAdd />}
          >
            Add contact
          </Button>
        </>
      }
    />
=======
    <CippFormPage
      formControl={formControl}
      queryKey={`ListContacts-${id}`}
      title={`Contact: ${contactInfo.data?.[0]?.displayName || ""}`}
      backButtonTitle="Contacts Overview"
      formPageType="Edit"
      postUrl="/api/EditContact"
      data={contactInfo.data?.[0]}
      customDataformatter={(values) => {
        return {
          tenantID: tenantDomain,
          ContactID: contactInfo.data?.[0]?.id,
          DisplayName: values.displayName,
          hidefromGAL: values.hidefromGAL,
          email: values.email,
          FirstName: values.firstName,
          LastName: values.lastName,
          Title: values.jobTitle,
          StreetAddress: values.streetAddress,
          PostalCode: values.postalCode,
          City: values.city,
          CountryOrRegion: values.country?.value || values.country,
          Company: values.companyName,
          mobilePhone: values.mobilePhone,
          phone: values.businessPhone,
        };
      }}
    >
      <Grid container spacing={2}>
        {/* Display Name */}
        <Grid item size={{ md: 10, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Display Name"
            name="displayName"
            formControl={formControl}
            validators={{ required: "Display Name is required" }}
          />
        </Grid>

        {/* First Name and Last Name */}
        <Grid item size={{ md: 5, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="First Name"
            name="firstName"
            formControl={formControl}
          />
        </Grid>
        <Grid item size={{ md: 5, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Last Name"
            name="lastName"
            formControl={formControl}
          />
        </Grid>

        <Divider sx={{ my: 2, width: "100%" }} />

        {/* Email */}
        <Grid item size={{ md: 8, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Email"
            name="email"
            formControl={formControl}
            validators={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email address",
              },
            }}
          />
        </Grid>

        {/* Hide from GAL */}
        <Grid item size={{ md: 4, xs: 12 }}>
          <CippFormComponent
            type="switch"
            label="Hidden from Global Address List"
            name="hidefromGAL"
            formControl={formControl}
          />
        </Grid>

        <Divider sx={{ my: 2, width: "100%" }} />

        {/* Company Information */}
        <Grid item size={{ md: 6, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Company Name"
            name="companyName"
            formControl={formControl}
          />
        </Grid>
        <Grid item size={{ md: 6, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Job Title"
            name="jobTitle"
            formControl={formControl}
          />
        </Grid>

        <Divider sx={{ my: 2, width: "100%" }} />

        {/* Address Information */}
        <Grid item size={{ md: 12, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Street Address"
            name="streetAddress"
            formControl={formControl}
          />
        </Grid>
        <Grid item size={{ md: 4, xs: 12 }}>
          <CippFormComponent type="textField" label="City" name="city" formControl={formControl} />
        </Grid>
        <Grid item size={{ md: 4, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Postal Code"
            name="postalCode"
            formControl={formControl}
          />
        </Grid>
        <Grid item size={{ md: 4, xs: 12 }}>
          <CippFormComponent
            type="autoComplete"
            label="Country"
            name="country"
            multiple={false}
            creatable={false}
            options={countryList.map(({ Code, Name }) => ({
              label: Name,
              value: Code,
            }))}
            formControl={formControl}
          />
        </Grid>

        <Divider sx={{ my: 2, width: "100%" }} />

        {/* Phone Numbers */}
        <Grid item size={{ md: 6, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Mobile Phone"
            name="mobilePhone"
            formControl={formControl}
          />
        </Grid>
        <Grid item size={{ md: 6, xs: 12 }}>
          <CippFormComponent
            type="textField"
            label="Business Phone"
            name="businessPhone"
            formControl={formControl}
          />
        </Grid>
      </Grid>
    </CippFormPage>
>>>>>>> 19ff0c5afad6c6a5ae20913ee784b5ef7dadd3b0
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;
export default Page;